import { useState } from "react";
import bannerImage from "../assets/bi2.png";

const About = () => {
  return (
    <>
      <div className="main-container bg-gray-300  border py-16 ">
        <h1 className="text-4xl pb-16 underline text-center font-bold">
          About Me
        </h1>
        <div className="flex items-center">
          {/* image */}
          <div className="w-full flex justify-center ">
            <img
              className="rounded-full border-lg w-fit "
              src={bannerImage}
              alt=""
            />
          </div>
          {/* text cointainer */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5  w-2/3">
              <h1 className="text-4xl  font-semibold ">
                Javascripit developer & React Developer
              </h1>
              <p>
                Mastering JavaScript involves key skills like understanding
                syntax, DOM manipulation, and event handling. Asynchronous
                programming, including promises and the Fetch API, is essential
                for smooth user experiences. Proficiency in error handling,
                closures, and scope enhances code reliability. Embracing
                object-oriented and functional programming paradigms, along with
                ES6+ features and modules, fosters cleaner code organization.
                Familiarity with testing and debugging tools, version control,
                and responsive design ensures robust applications. Lastly,
                integrating frameworks like React or Angular and utilizing APIs
                further enriches your JavaScript skill set.
              </p>
              <p>
                React.js is a powerful JavaScript library for building user
                interfaces. It emphasizes component-based architecture, enabling
                reusable UI components. With features like virtual DOM, state
                management, and hooks, React enhances performance and efficiency
                in web development.
              </p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg ">
                Read More..
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
