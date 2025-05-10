"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import SendIcon from "remixicon-react/SendPlane2FillIcon";
import LoaderIcon from "remixicon-react/Loader2FillIcon";
import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
export default function ContactForm() {
  const [loading, setloading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setloading(true);
    emailjs
      .sendForm("service_j2jyl9a", "template_bqqoj7j", form.current, {
        publicKey: "81bYUjqDIkQTac5NX",
      })
      .then(
        () => {
          alert("SUCCESS! i receive your email ,wait for replay");

          form.current.reset();
          setloading(false);
        },
        (error) => {
          alert("FAILED...", error.text);
          setloading(false);
        }
      );
  };
  return (
    <div id="contact" className="mycontainer py-20">
      <Heading text={"Contact Me 👋 "} />
      <div className="flex max-sm:flex-wrap items-center justify-between gap-8 ">
        <div className=" max-sm:w-full grid place-items-center">
          <div className="relative">
            <Image
              src={"/my-img.jpg"}
              alt="my-img"
              width={200}
              height={200}
              className=" rounded-full object-contain border-2 border-amber-400"
            />
            <span className="absolute size-2 bg-green-600 rounded-full animate-ping top-0 right-6"></span>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full flex flex-col space-y-6"
        >
          <div className="flex items-center justify-between w-full gap-4 max-sm:flex-wrap  ">
            <input
              type="text"
              name="name"
              required
              placeholder="Enter Your Name"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none dark:bg-zinc-900 dark:text-white"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Your Email For Replay"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none dark:bg-zinc-900 dark:text-white "
            />
          </div>
          <textarea
            name="message"
            required
            id=""
            className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none w-full dark:bg-zinc-900 dark:text-white"
            placeholder="if you sent an email , wait the replay so put active email plz..."
          ></textarea>
          <button
            type="submit"
            className="self-end font-bold border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-lg  tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer flex gap-2 items-center disabled:opacity-60"
            disabled={loading}
          >
            Send
            {loading ? <LoaderIcon className="animate-spin" /> : <SendIcon />}
          </button>
        </form>
      </div>
    </div>
  );
}
