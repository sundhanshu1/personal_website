import bannerImage from "../assets/bi1.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Android developer",
        "Frontend Developer",
        "Backend Developer",
        "Mern Stack Developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container h-screen flex items-center "
    >
      {/* first dabba */}
      <div className=" w-full flex items-center justify-center text-white">
        {/* text */}
        <div className="w-2/3 space-y-2  sp ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="  text-5xl font-bold">Sundhanshu Pathania</h1>
          <h2 className=" text-3xl ">
            And I am a <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className=" font-semibold">
            A web developer is a skilled professional who creates and maintains
            websites, ensuring they are visually appealing and user-friendly.
            They utilize various programming languages, such as HTML, CSS, and
            JavaScript, to build responsive designs. Web developers also
            optimize site performance, troubleshoot issues, and implement
            security measures to protect user data.
          </p>

          <div className="icons-container flex space-x-5 text-4xl  ">
            <a className=" hover:bg-orange-600 border cursor-pointer px-2 py-2 w-16 h-16 bg-gray-800 rounded-full flex justify-center items-center ">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a className=" hover:bg-orange-600 border cursor-pointer px-2 py-2 w-16 h-16 bg-gray-800 rounded-full flex justify-center items-center ">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a className=" hover:bg-orange-600 border cursor-pointer px-2 py-2 w-16 h-16 bg-gray-800 rounded-full flex justify-center items-center ">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a className=" hover:bg-orange-600 border cursor-pointer px-2 py-2 w-16 h-16 bg-gray-800 rounded-full flex justify-center items-center ">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>

          <br />

          <a
            className=" text-1xl cursor-pointer px-3 py-2 bg-orange-500 rounded-full shadow-lg"
            href="/contact me"
          >
            contact me
          </a>
        </div>
      </div>

      {/* second dabba */}

      <div className=" w-full flex justify-center">
        {/* image */}
        <img className="rounded-full my-2 shadow-lg w-fit" src={bannerImage} />
      </div>
    </div>
  );
};
export default Banner;
