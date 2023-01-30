import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[8px] w-[220px] mx-auto border-b-blue-800 pb-2 rounded-full">
          Contact Me
        </h2>
        <p>
          I am studying in Computer Science Kasetsart University in Thailand. If
          you want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> ong22280@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> 0983567789
        </p>
      </div>
    </section>
  );
};

export default Contact;
