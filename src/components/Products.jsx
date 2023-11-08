import React from "react";
import art from "../assets/art.png";
const Products = () => {
  return (
    <div>
    <div className="w-10/12 m-auto my-8">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <img src={art} alt="" className="w-96 h-96"/>
          </div>
          <div className="md:w-3/4 mx-auto">
            <h2 className="text-4xl text-naturalGrey font-semibold mb-4 md:w-4/5">
            aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio
            </h2>
            <p className="md:w-3/4 text-base text-naturalGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="py-2 px-4 bg-brandPrimary rounded cursor-pointer text-white">
              Lear More
            </button>
          </div>
        </div>
      </div>

      <div className=" py-16">
        <div className="flex flex-col  md:flex-row justify-between items-center gap-8">
          
          <div className="md:w-3/4 mx-auto">
            <div>
              <p className="md:w-3/4 text-base text-naturalGrey leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
              <h5 className="text-xl text-brandPrimary font-semibold">
                John Doe
              </h5>
            </div>
          </div>
          <div className="md:w-1/3">
            <img
              src="/src/assets/feedback.png"
              alt=""
              className="w-96 h-96 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default Products;
