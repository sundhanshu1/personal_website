import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-14 ">
        <h1 className="text-4xl font-black text-center underline ">
          My Services
        </h1>
        <div className="services-cointainer space-x-5 px-10 flex mt-12">
          <div className="service1 cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 text-center space-y-3 shadow-lg rounded-xl">
            <i class=" text-5xl fa-solid fa-blog"></i>
            <h1 className="text-4xl">Web Development</h1>
            <p>
              Web development involves creating and maintaining websites,
              encompassing frontend and backend technologies. It requires skills
              in HTML, CSS, JavaScript, frameworks, databases, and responsive
              design for optimal  experiences.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 shadow-lg space-y-3 bg-slate-200 p-5 text-center rounded-xl">
            <i class=" text-5xl fa-solid fa-mobile-screen-button"></i>
            <h1 className="text-4xl">Frontend Developer</h1>
            <p>
              A front-end developer creates visually appealing websites using
              HTML, CSS, and JavaScript. They ensure responsive design, optimize
              user experience, and collaborate with designers and backend
              developers to implement functional interfaces.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 shadow-lg space-y-3 bg-slate-200 p-5 text-center rounded-xl">
            <i class=" text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Backend Developer</h1>
            <p>
              A backend developer focuses on server-side logic, databases, and
              application integration. They ensure data processing, security,
              and performance while collaborating with frontend developers to
              create seamless  experiences.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
