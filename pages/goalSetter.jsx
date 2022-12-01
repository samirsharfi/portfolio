import Image from "next/image";
import React from "react";

import mern from "../public/assets/projects/mern.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const goalSetter = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={mern}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">GoalSetter App</h2>
          <h3>MERN Stack / Redux Js / Redux Toolkit / Heroku </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built this application in MERN Stack. I built a rest API with
            Express which is a backend node.js framework and Mongodb for
            database, as well as Mongoose to connect and interact with Mongodb.
            This app features RESTAPI authentication with Json Web Token as well
            as the Mongodb cloud storage database. I built the frontend with
            React.js and add authentication using Redux Toolkit to manage our
            global state. This application is designed to help users set goals.
          </p>
          <a
            href="https://github.com/samirsharfi/mern-tutorial"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://mernappboom.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default goalSetter;
