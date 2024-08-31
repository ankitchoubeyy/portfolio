"use client";
import React from "react";
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <h2 className="text-white text-center font-extrabold text-4xl md:text-5xl  ">
        Contact
      </h2>
      <div
        className="max-w-[1200px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-x-8 justify-evenly"
        id="contact"
      >
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <ul>
            <li className="flex items-center">
              <Image
                src={phone}
                alt="phoneIcon"
                className="h-[80px] md:h-[110px] w-auto mr-6"
              />
              <p className="text-sm md:text-xl">+91 9650289306</p>
            </li>
            <li className="flex items-center">
              <Image
                src={mail}
                alt="mailIcon"
                className="h-[80px] md:h-[110px] w-auto mr-6"
              />
              <p className="text-sm md:text-xl">imkitchoubey@gmail.com</p>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          className="bg-white/10 p-6 rounded-xl max-w-[550px] mx-auto"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-orange-400 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-white/70 mb-6">Drop your Queries</p>
          <form
            className="space-y-4"
            action="https://getform.io/f/bxojnrla"
            method="POST"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="First Name"
              />
              <input
                type="text"
                className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Last Name"
              />
              <input
                type="email"
                name="email"
                className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Email"
              />
              <input
                type="phone"
                name="phone"
                className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Phone"
              />
            </div>
            <textarea
              name=""
              id=""
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
              placeholder="Your Message"
            ></textarea>
            <button className="bg-orange-700 hover:bg-orange-500 px-6 py-2 w-full font-semibold rounded-xl text-xl">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
