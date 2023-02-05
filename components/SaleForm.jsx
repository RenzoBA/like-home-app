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
      className="w-full md:w-80 h-full md:h-96 flex flex-col items-center justify-around text-lg font-medium p-4 rounded-2xl shadow border border-dark dark:border-white"
    >
      <div className="flex flex-row justify-between w-full items-center text-xl mb-4">
        <p>
          {price} <span className="currency">AED</span>
        </p>
        <div className="flex items-center gap-1">
          <FaStar color="#84cc16" />
          <p>{score / 20}</p>
        </div>
      </div>
      <div className="w-full">
        <div className="form-cost">
          <p>Discount</p>
          <p className="text-theme">
            {"-" + discount} <span className="currency">AED</span>
          </p>
        </div>
        <div className="form-cost">
          <p>Service fee</p>
          <p>
            {serviceFee.toFixed(2)} <span className="currency">AED</span>
          </p>
        </div>
        <hr className=" mt-4" />
        <div className="form-cost font-medium text-xl lg:text-2xl mt-4">
          <p className="uppercase">Total</p>
          <p>
            {(price - discount + serviceFee).toFixed(2)}{" "}
            <span className="currency">AED</span>
          </p>
        </div>
      </div>
      <button className="button">buy now</button>
    </form>
  );
};

export default ReservationForm;
