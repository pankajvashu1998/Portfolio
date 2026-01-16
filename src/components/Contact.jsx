import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

const Contact = ({ themeMode }) => {
  const [isSentMessage, setItSentMessage] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const inputHandle = (e) => {
    const oldValue = { ...contactForm };
    const inputName = e.target.name;
    const inputValue = e.target.value;
    oldValue[inputName] = inputValue;
    setContactForm(oldValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setItSentMessage(true);
    try {
      const response = await axios.post(
        "https://backend-pankaj-vashu.vercel.app/api/mail",
        contactForm
      );

      console.log(response);
      

      if (!response.data.success) {
        toast.error(response.data.message);
      }
      if (response?.data.success) {
        setItSentMessage(false);
        toast.success(response.data.message);
        setContactForm({
          name: "",
          email: "",
          msg: "",
        });
      }
    } catch (error) {
      setItSentMessage(false);
    } finally {
      setItSentMessage(false);
    }
  };
  return (
    <section
      id="contact"
      className={`w-full min-h-screen px-4 py-16   ${
        themeMode === "dark"
          ? "bg-linear-to-r from-[#171716] via-[#1c0f01] to-[#070000] text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
          Contact Me
        </h1>
        <p className=" mt-5 text-lg leading-relaxed">
          Have a project in mind or want to collaborate? Let’s discuss how I can
          help bring your ideas to life.
        </p>
      </div>

      <div className="max-w-2xl mx-auto ">
        {/* Left: Contact Info */}
        <div className="space-y-10">
          <div
            className="
      p-7 rounded-2xl
      bg-white/5 backdrop-blur-xl
      border border-amber-500/20
      shadow-lg shadow-amber-500/10
    "
          >
            <h2 className="text-2xl font-semibold mb-8">Get in Touch</h2>

            <div className="space-y-6 ">
              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-700 text-xl">
                  <FaEnvelope />
                </div>
                <span className="text-base">pk85764798@email.com</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-700 text-xl">
                  <FaPhone />
                </div>
                <span className="text-base">+91 76544 70477</span>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-700 text-xl">
                  <FaLinkedin />
                </div>
                <a
                  href="https://www.linkedin.com/in/pankajkumar1234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:text-amber-700 transition"
                >
                  Linkedin
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-700 text-xl">
                  <FaGithub />
                </div>
                <a
                  href="https://github.com/pankajvashu1998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:text-amber-700 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
            {/* Location */}
            <div className="flex items-center gap-5 my-5">
              <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-700 text-xl">
                <FaLocationDot />
              </div>
              <span className="text-base">India</span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div
          className="
            p-7 md:p-9 rounded-2xl
            bg-white/5 backdrop-blur-xl
            border border-amber-500/20
            shadow-lg shadow-amber-500/10
            my-8 relative
          "
        >
          <h2 className="text-2xl font-semibold mb-8">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              onChange={inputHandle}
              type="text"
              name="name"
              value={contactForm.name}
              placeholder="Your Name"
              className="
                w-full px-4 py-3 rounded-lg
                bg-black/30
                border border-amber-500/20
                focus:outline-none focus:border-amber-500/60
                focus:ring-1 focus:ring-amber-500/30
                text-white placeholder-gray-500
              "
            />

            <input
              onChange={inputHandle}
              type="email"
              name="email"
              value={contactForm.email}
              placeholder="Your Email"
              className="
                w-full px-4 py-3 rounded-lg
                bg-black/30
                border border-amber-500/20
                focus:outline-none focus:border-amber-500/60
                focus:ring-1 focus:ring-amber-500/30
                text-white placeholder-gray-500
              "
            />

            <textarea
              onChange={inputHandle}
              rows="5"
              name="msg"
              value={contactForm.msg}
              placeholder="Your Message"
              className="
                w-full px-4 py-3 rounded-lg
                bg-black/30
                border border-amber-500/20
                focus:outline-none focus:border-amber-500/60
                focus:ring-1 focus:ring-amber-500/30
                text-white placeholder-gray-500 resize-none
              "
            ></textarea>

            <button
              type="submit"
              className="
                w-full py-3 rounded-lg
                bg-amber-500/20
                border border-amber-500/40
                text-amber-400 font-semibold
                hover:bg-amber-500/30
                hover:shadow-lg hover:shadow-amber-500/40
                transition-all duration-300
                cursor-pointer
              "
            >
              Send Message
            </button>
          </form>
          {isSentMessage && (
            <div className="flex justify-center items-center flex-col  h-full w-full absolute top-0 left-0 right-0">
              <div className="h-[200] w-[200] bg-white rounded-md flex justify-center items-center flex-col">
                <div className="h-10 w-10 border-4 border-amber-500 border-b-4 border-b-transparent rounded-full animate-spin "></div>
                <p className="pt-2 font-semibold text-black">Sending message</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
