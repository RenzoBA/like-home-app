import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";

const ReservationForm = ({ price = 0, score = 0, user }) => {
  const router = useRouter();

  const discount = price / 8;
  const serviceFee = price / 10;

  const handleSubmitBook = (e) => {
    e.preventDefault();
    alert("you buy it ;)");
  };

  const loginRoute = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <form
      onSubmit={user ? handleSubmitBook : loginRoute}
      className="w-[22rem] flex flex-col items-center justify-center text-lg font-medium p-4 rounded-2xl shadow border border-dark dark:border-white"
    >
      <div className="flex flex-row justify-between w-full items-center text-xl mb-4">
        <p>{price} AED</p>
        <div className="flex items-center gap-1">
          <FaStar color="#84cc16" />
          <p>{score / 20}</p>
        </div>
      </div>
      <button className="button">buy now</button>
      <div className="w-full">
        <div className="form-cost">
          <p className="font-light">Discount</p>
          <p className="text-theme">{"-" + discount} AED</p>
        </div>
        <div className="form-cost">
          <p className="font-light">Service fee</p>
          <p>{serviceFee.toFixed(2)} AED</p>
        </div>
        <hr className=" mt-4" />
        <div className="form-cost text-2xl mt-4">
          <p className="uppercase">Total</p>
          <p>{(price - discount + serviceFee).toFixed(2)} AED</p>
        </div>
      </div>
    </form>
  );
};

export default ReservationForm;
