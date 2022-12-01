import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";
import ProjectItem from "../components/ProjectItem";
import cv from "../public/assets/cv.png";
import Image from "next/image";
const resume = () => {
  return (
    <>
      <Head>
        <title>Samir | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building."
        />
        <link rel="icon" href="/navLogo.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center"></h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/samir-sharfi-495644235/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/samirsharfi"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>

        <div className="flex justify-center ">
          <Image src={cv} alt="cv" width={700} height={600} />
        </div>
      </div>
    </>
  );
};

export default resume;
