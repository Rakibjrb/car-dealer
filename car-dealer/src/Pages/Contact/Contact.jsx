const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 pt-10 xl:px-0 font-raleway">
      <h1 className="text-4xl text-center font-bold mb-4">
        Contact <span className="text-red-600">Us</span>
      </h1>
      <p className="text-justify md:text-center text-xl w-[90%] mx-auto md:w-4/5">
        {"We're"} here to assist you! Whether you have questions, suggestions,
        or just want to connect with our team, feel free to reach out. Your
        feedback is valuable to us, and
        {"we're"} committed to providing excellent support.
      </p>
      <form className="w-full max-w-xl mx-auto mt-7">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
