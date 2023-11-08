import React from "react";
import {FaUsers, FaMoneyCheckAlt} from 'react-icons/fa'
import {BiHomeAlt2} from 'react-icons/bi'
import {LiaHandshake} from 'react-icons/lia'
import CountUp from 'react-countup';
const Stat = () => {
  return (
    <div className="bg-naturalSilver py-16">
      <div className="flex flex-col  md:flex-row justify-between items-center gap-8 w-10/12 m-auto">
        <div className="md:w-1/2">
          <h2 className="text-4xl text-naturalGrey font-semibold mb-4 md:w-2/3">
          What is Lorem Ipsum?
            <br />
            <span className="text-brandPrimary">Why do we use it?</span>
          </h2>
          <p className="md:w-3/4 text-base text-naturalGrey mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>
        </div>

        <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <FaUsers className="text-5xl text-brandPrimary"/>
              <div>
                <h4 className="text-2xl text-naturalGrey font-semibold">
                <CountUp end={2245341} duration={5}/>
                </h4>
                <p>Members</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <BiHomeAlt2 className="text-5xl text-blue-600"/>
              <div>
                <h4 className="text-2xl text-naturalGrey font-semibold">
                <CountUp end={828867} duration={5}/>
                </h4>
                <p>Event Bookings</p>
              </div>
            </div>
          </div>


          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <LiaHandshake className="text-5xl text-orange-400"/>
              <div>
                <h4 className="text-2xl text-naturalGrey font-semibold">
                <CountUp end={46328} duration={5}/>
                </h4>
                <p>Clubs</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
            <FaMoneyCheckAlt className="text-5xl text-fuchsia-700"/>
              <div>
                <h4 className="text-2xl text-naturalGrey font-semibold">
                <CountUp end={1926436} duration={5}/>
                </h4>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
