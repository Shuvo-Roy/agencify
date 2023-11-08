import React from "react";

const Client = () => {
    const logos =[
        {
            id:1,
            img:"/src/assets/company/logo1.png",
        },
        {
            id:2,
            img:"/src/assets/company/logo2.png",
        },
        {
            id:3,
            img:"/src/assets/company/logo3.png",
        },
        {
            id:4,
            img:"/src/assets/company/logo4.png",
        },
        {
            id:5,
            img:"/src/assets/company/logo5.png",
        },
        {
            id:6,
            img:"/src/assets/company/logo6.png",
        },
        {
            id:7,
            img:"/src/assets/company/logo7.png",
        },
    ]
  return (
    <div>
      <div className="w-10/12 m-auto">
        <div className="text-center my-8">
          <h2 className="text-4xl text-naturalGrey font-semibold mb-2">
            Our Clients
          </h2>
          <p className="text-naturalGrey">
            We have been working with some Fortune 500+ clients
          </p>

          <div className="logos py-4 bg-white whitespace-nowrap relative overflow-hidden">
            <div className="logos-slide">
            {
                logos.map(logo=> <img src={logo.img} key={logo.id}/>)
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
