import { useState } from "react";
const SwitchProfile = () => {
  const [dealer, setDealer] = useState(false);
  return (
    <div className="text-gray-300 flex items-center gap-2">
      <button
        onClick={() => {
          setDealer(true);
        }}
        className={`${
          dealer ? "text-red-600" : "text-gray-400"
        }  font-semibold`}
      >
        Dealer Profile
      </button>{" "}
      <div>|</div>
      <button
        onClick={() => {
          setDealer(false);
        }}
        className={`${dealer ? "text-gray-400" : "text-red-600"} font-semibold`}
      >
        Seller Profile
      </button>
    </div>
  );
};

export default SwitchProfile;
