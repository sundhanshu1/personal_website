import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-4xl font-bold underline text-center">
          My Expertise
        </h1>
        {/* Expertise */}
        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="flex   text-white  justify-center">
            {/* text cointaner */}
            <div className="w-2/3 text-center space-y-3">
              <h1 className="text-4xl font-bold">I love these technologies</h1>
              <p>
                As a full stack developer, I enjoy the challenge of building
                complete applications from the ground up. Working with both
                frontend and backend technologies allows me to innovate and
                solve complex problems creatively.
              </p>
              <button className=" text-1xl px-4 py-2 bg-orange-500 rounded-full hover:bg-orange-500 cursor-pointer shadow-lg">
                Hire Me
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            {/* skill-container */}
            <div className="flex w-2/3  justify-center space-x-3 flex-wrap space-y-3">
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                {" "}
                core Javascripit{" "}
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                HTML
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                CSS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                TALWIND
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                {" "}
                Bootstrap
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                React
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Node.js
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Express
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Git
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                mongodb
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                SQl
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                java
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                php
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                phyton
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Framework
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Angular
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Next.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Expertise;
