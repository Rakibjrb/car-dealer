import { TbFidgetSpinner } from "react-icons/tb";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[100px]">
      <div className="flex justify-center flex-col">
        <TbFidgetSpinner className="text-5xl animate-spin text-center ml-10" />
        <h1 className="font-bold text-2xl mt-4 uppercase">Loading . . .</h1>
      </div>
    </div>
  );
};

export default Spinner;
