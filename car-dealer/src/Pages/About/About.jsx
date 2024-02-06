import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import "./about.css";

const About = () => {
  const { data: members } = useQuery({
    queryKey: ["teammembers"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/Rakibjrb/car-dealer/master/car-dealer/public/members.json"
      );
      return res.data;
    },
  });

  return (
    <div className="max-w-screen-xl mx-auto px-3 pt-10 xl:px-0 font-raleway">
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
          <div className="max-w-screen-xl mx-auto px-4 xl:px-0 mt-6">
            <h2 className="text-center text-3xl capitalize font-semibold mb-4">
              Our team <span className="text-red-600">members</span>
            </h2>
            <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {members?.map((member) => {
                const { id, name, social_media, image } = member;
                return (
                  <div
                    className="rounded-md teammember relative overflow-hidden bg-red-300 py-10 hover:bg-base-300 hover:cursor-pointer transition-all"
                    key={id}
                  >
                    <div>
                      <div>
                        <img
                          className="memberpic rounded-full w-40 mx-auto"
                          src={image}
                          alt={name}
                        />
                      </div>
                      <div className="font-poppins text-center">
                        <h3 className="font-bold text-2xl mt-5">{name}</h3>
                      </div>
                    </div>
                    <div className="flex items-center social-links transition-all w-full absolute h-1/3 -bottom-32 right-0 bg-[rgba(255,101,101,0.67)]">
                      <ul className="flex justify-between w-full items-center px-10 py-5">
                        <li>
                          <a href={social_media.facebook}>
                            <FaFacebookSquare className="text-white text-3xl hover:text-red-600 transition-colors" />
                          </a>
                        </li>
                        <li>
                          <a href={social_media.instagram}>
                            <FaInstagram className="text-white text-3xl hover:text-red-600 transition-colors" />
                          </a>
                        </li>
                        <li>
                          <a href={social_media.twitter}>
                            <FaTwitter className="text-white text-3xl hover:text-red-600 transition-colors" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
