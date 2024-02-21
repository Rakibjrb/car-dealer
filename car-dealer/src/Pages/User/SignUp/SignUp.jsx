import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../../Hooks/auth/useAuth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const { createUser, updateNameAndPhoto, alert } = useAuth();
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    setLoading(true);
    createUser(email, password)
      .then(() => {
        updateNameAndPhoto(name)
          .then(() => {
            alert("success", "User creation successfull ...");
            setLoading(false);
            navigate("/");
          })
          .catch(() => {
            alert("warning", "Something went wrong !!!");
            setLoading(false);
          });
      })
      .catch(() => {
        alert("warning", "Something went wrong !!!");
        setLoading(false);
      });
  };

  return (
    <div className="w-full pt-5">
      <h1 className="text-2xl text-black font-semibold capitalize text-center mb-4">
        Log In
      </h1>
      <form onSubmit={handleCreateUser} className="lg:pl-0 xl:pl-4">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Enter Name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type={`password`}
            id="password"
            name="password"
            placeholder="Enter Password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>
        <button className="w-full bg-red-600 hover:bg-red-700 transition-colors py-3 px-7 rounded-md uppercase font-semibold text-white">
          {!loading ? (
            "Sign Up"
          ) : (
            <div className="flex justify-center">
              <TbFidgetSpinner className="text-white text-2xl animate-spin text-center" />
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
