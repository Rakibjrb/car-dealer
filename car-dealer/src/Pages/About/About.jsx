const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 py-10 xl:px-0">
      <h1 className="text-4xl text-center font-bold mb-4">
        About MOTO<span className="text-red-600">RX</span>
      </h1>
      <p className="text-center text-xl">
        Welcome to MOTORX, your go-to destination for car pricing and listings!
      </p>

      <div className="space-y-5 mt-10">
        <div className="">
          <h2 className="text-3xl font-semibold">
            Our <span className="text-red-600">Mission</span>
          </h2>
          <p className="text-xl">
            At MOTORX, we are committed to providing a seamless and
            user-friendly platform for car enthusiasts to explore, compare, and
            find their dream vehicles. At MOTORX, our mission is to
            revolutionize the way people buy and sell cars. We believe in
            creating a platform that not only simplifies the car-buying process
            but also empowers users with comprehensive information, enabling
            them to make informed decisions.
          </p>
        </div>

        <div className="team-section">
          <h2 className="text-3xl font-semibold">Meet the Team</h2>
          <p className="text-xl">
            Our dedicated team of professionals is passionate about cars and
            technology. We strive to deliver the best user experience and keep
            you informed about the latest trends and developments in the
            automotive world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
