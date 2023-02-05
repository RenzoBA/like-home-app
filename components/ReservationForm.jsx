import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";

const ReservationForm = ({ price = 0, rentFrequency, score = 0, user }) => {
  const [dayIn, setDayIn] = useState("");
  const [dayOut, setDayOut] = useState("");
  const router = useRouter();

  const today = new Date();
  const priceDay = price / 30;
  const bookingDays = (Date.parse(dayOut) - Date.parse(dayIn)) / 86400000;
  const discount = price / 8;
  const cleaningFee = price / 100;
  const serviceFee = price / 10;

  const handleSubmitBook = (e) => {
    e.preventDefault();
    alert("you rent it ;)");
  };

  const loginRoute = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <form
      onSubmit={user ? handleSubmitBook : loginRoute}
      className="w-full md:w-80 flex flex-col items-center justify-center text-lg font-medium p-4 rounded-2xl shadow border border-dark dark:border-white"
    >
      <div className="flex flex-row justify-between w-full items-center text-xl mb-4">
        <p>
          {price} AED
          <span className="text-stone-400 font-light text-sm">
            / {rentFrequency}
          </span>
        </p>
        <div className="flex items-center gap-1">
          <FaStar color="#84cc16" />
          <p>{score / 20}</p>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-2 items-center justify-center font-normal mb-6">
        <input
          type="date"
          min={today}
          max="2023-12-31"
          className="input"
          value={dayIn}
          onChange={(e) => setDayIn(e.target.value)}
          required
        />
        <input
          type="date"
          min={today}
          max="2023-12-31"
          className="input"
          value={dayOut}
          onChange={(e) => setDayOut(e.target.value)}
          required
        />
      </div>
      <div className="w-full">
        <div className="form-cost">
          <p className="font-light">
            Your book ({dayIn && dayOut ? bookingDays : 0} days)
          </p>
          <p>
            {dayIn && dayOut ? (priceDay * bookingDays).toFixed(2) : 0}{" "}
            <span className="currency">AED</span>
          </p>
        </div>
        <div className="form-cost">
          <p className="font-light">Long stay discount</p>
          <p className="text-theme">
            {dayIn && dayOut ? "-" + discount : 0}{" "}
            <span className="currency">AED</span>
          </p>
        </div>
        <div className="form-cost">
          <p className="font-light">Cleaning fee</p>
          <p>
            {dayIn && dayOut ? cleaningFee.toFixed(2) : 0}{" "}
            <span className="currency">AED</span>
          </p>
        </div>
        <div className="form-cost">
          <p className="font-light">Service fee</p>
          <p>
            {dayIn && dayOut ? serviceFee.toFixed(2) : 0}{" "}
            <span className="currency">AED</span>
          </p>
        </div>
        <hr className=" mt-4" />
        <div className="form-cost text-xl sm:text-xl md:text-2xl mt-4">
          <p className="uppercase">Total</p>
          <p>
            {dayIn && dayOut
              ? (
                  priceDay * bookingDays -
                  discount +
                  cleaningFee +
                  serviceFee
                ).toFixed(2)
              : 0}{" "}
            <span className="currency">AED</span>
          </p>
        </div>
      </div>
      <button className="button">book now</button>
    </form>
  );
};

export default ReservationForm;
