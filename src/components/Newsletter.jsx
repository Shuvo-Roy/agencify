import React from "react";
import {BiLinkExternal} from 'react-icons/bi'
const Newsletter = () => {
  return (
    <div className="py-16">
      <div className="w-10/12 m-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl text-naturalGrey font-semibold mb-4 leading-snug">
            How to design your site footer like we did
          </h2>
          <div className="flex items-center justify-center gap-8">
            <button className="rounded px-4 py-2 bg-brandPrimary text-white flex gap-4 items-center justify-center">
              Get A Demo
              <BiLinkExternal className="text-2xl"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
