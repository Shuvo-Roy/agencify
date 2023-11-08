import React from "react";
import about from "../assets/service.png";
import Stat from "./Stat";
const About = () => {
  return (
    <div>
      <div className="w-10/12 m-auto">
        <div className="flex flex-col justify-around items-center md:flex-row">
          <div>
            <img src={about} alt="" className="w-96 h-96"/>
          </div>
          <div className="md:w-3/4 mx-auto">
            <h2 className="text-4xl text-naturalGrey font-semibold mb-4 md:w-4/5">
            Lorem ipsum dolor sit amet
            </h2>
            <p className="md:w-3/4 text-base text-naturalGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="py-2 px-4 bg-brandPrimary rounded cursor-pointer text-white font-semibold text-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <Stat />
    </div>
  );
};

export default About;
