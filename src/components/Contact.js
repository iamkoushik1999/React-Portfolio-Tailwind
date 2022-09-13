import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4  bg-[#0a192f]"
    >
      <form
        method="POST"
        action="https://getform.io/f/ebeac089-7424-4a89-9829-ea4f2011265b"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below @iamkoushik1999@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="E-mail"
          name="email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          name="messege"
          rows="10"
          placeholder="Messege"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Send My Messege
        </button>
      </form>
    </div>
  );
};

export default Contact;
