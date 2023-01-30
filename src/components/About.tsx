import React from "react";
import AboutImg from "../assets/about-img.png";
// why Cannot find module '../assets/about-img.png' or its corresponding type declarations.ts(2307)

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[8px] w-[180px] border-b-blue-800 pb-2 rounded-r-full">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Sittipong Hemloun everyone calls me Ong. I am a
            student of computer science. I build the portfolio website with
            React and Tailwind CSS.
          </p>
          <p className="pb-5">
            I am studying in Frontend skills like React.js, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
          </p>
          <p>
            In backend I am studying Node.js, Express.js, MongoDB, and Mongoose
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto rounded-full max-w-[300px] min-w-[200px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
