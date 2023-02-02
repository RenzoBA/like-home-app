"use client";

// ADD SALE FOLDER - IMPLEMENT PHONE DEVICE SIZE - ADD PHONE AUTH - ADD MAP PROPERTY FEATURE

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { MyContext } from "app/(global-context)";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineAlternateEmail, MdPhoneIphone } from "react-icons/md";
import { BiHomeSmile } from "react-icons/bi";

const login = () => {
  const { darkMode, setUser } = useContext(MyContext);
  const [signup, setSignup] = useState(true);
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const provider = {
    google: new GoogleAuthProvider(),
  };

  const loginGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider.google);
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential.accessToken;
      const user = res.user;
      setUser(user);
      setCredential({
        email: "",
        password: "",
      });
      router.push("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      throw new Error(`Error ${errorCode}: ${errorMessage}`);
    }
  };

  const loginPhone = async () => {};

  const signupEmail = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        credential.email,
        credential.password
      );
      const user = userCredential.user;
      setUser(user);
      setCredential({
        email: "",
        password: "",
      });
      router.push("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(`Error ${errorCode}: ${errorMessage}`);
    }
  };

  const loginEmail = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credential.email,
        credential.password
      );
      const user = userCredential.user;
      setUser(user);
      setCredential({
        email: "",
        password: "",
      });
      router.push("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(`Error ${errorCode}: ${errorMessage}`);
    }
  };

  const handleChangeCredential = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`${
        darkMode && "dark"
      } h-[88.5vh] flex justify-center items-center text-dark`}
    >
      <div className="w-full h-full flex flex-col items-center justify-center dark:bg-dark dark:text-white">
        <form
          onSubmit={signup ? signupEmail : loginEmail}
          className="flex flex-col gap-3 w-1/4 border-b border-stone-300 dark:border-stone-600"
        >
          <div className={`${!signup && "hidden"} flex gap-3`}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input w-1/2 py-2 px-4"
            />
            <input
              type="text"
              name="last-name"
              placeholder="Last Name"
              className="input w-1/2 py-2 px-4"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChangeCredential}
            value={credential.email}
            className="input py-2 px-4"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChangeCredential}
            value={credential.password}
            className="input py-2 px-4"
          />
          <button className="button h-10">
            {signup ? "Sign up" : "Log in"}
          </button>
        </form>
        <div className="flex flex-col gap-5 w-1/4 pt-6">
          <button onClick={loginGoogle} className="login-button">
            <FcGoogle className="text-xl" /> Continue with Google
          </button>
          <button onClick={loginPhone} className="login-button">
            <MdPhoneIphone className="text-xl" /> Continue with Phone
          </button>
          <button onClick={() => setSignup(!signup)} className="login-button">
            <MdOutlineAlternateEmail className="text-xl" />
            {signup ? "Continue " : "Sign up"} with Email
          </button>
        </div>
        <h1 className="text-5xl font-black mt-10 select-none">
          Like H
          <span className="inline-block relative -bottom-1">
            <BiHomeSmile color="#84cc16" />
          </span>
          me
        </h1>
      </div>
    </div>
  );
};

export default login;
