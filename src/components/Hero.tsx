import React from "react";

import {
  AiOutlineBook,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto ">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">Ong</span>
            <br />
            student of Computer Science
          </h1>

          <p className="py-5">I am interested and studying web development.</p>

          <div className="flex py-5 ">
            <a
              href="https://github.com/ong22280"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100008313884704"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
            <a
              href="https://www.instagram.com/sittipongong/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineInstagram size={40} />{" "}
            </a>
            <a
              href="https://beryl-court-dae.notion.site/Ong-s-dashboard-bb5d16daf060471586098d02bedeb1a4"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineBook size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#2F00F0] text-white px-12 py-3 hover:bg-transparent rounded-full"
          >
            See Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
