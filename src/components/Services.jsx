import React from "react";
export const Services = () => {
  const serviceCard = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "/src/assets/product (1).png",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "/src/assets/product (2).png",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "/src/assets/service.png",
    },
  ];
  return (
    <div>
      <div className="w-10/12 py-16 max-w-screen-2xl mx-auto">
        <div className="mt-20 md:w-1/2 m-auto text-center">
          <h2 className="text-4xl text-naturalGrey font-semibold mb-2">
          Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor
          </h2>
          <p className="text-naturalGrey">Nullam pulvinar sit amet risus pretium auctor</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
          {serviceCard.map((service) => (
            <div key={service.id}>
              <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-lg shadow-sm cursor-pointer hover:-translate-y-3 hover:border-b-4 hover:border-green-700 hover:border-opacity-70 transition-all duration-300 flex items-center justify-center h-full bg-naturalSilver">
                <div>
                  <div className="h-36 w-36 m-auto">
                    <img src={service.img} alt={service.title} />
                  </div>
                  <h2 className="text-2xl font-bold text-naturalGrey mb-2 px-2">
                    {service.title}
                  </h2>
                  <p className="text-base text-naturalGrey">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
