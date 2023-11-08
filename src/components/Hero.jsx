import { Carousel } from "flowbite-react";
import React from "react";
function Hero() {
  const carousel = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.",
      img: "/src/assets/art.png",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.",
      img: "/src/assets/feedback.png",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.",
      img: "/src/assets/product (1).png",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.",
      img: "/src/assets/product (2).png",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum..",
      img: "/src/assets/service.png",
    },
    {
      id: 6,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
      img: "/src/assets/workspace.png",
    },
    {
      id: 7,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/src/assets/feedback.png",
    },
  ];
  return (
    <div className="bg-naturalSilver">
      <div className="m-auto min-h-screen h-screen w-10/12">
        <Carousel className="w-full mx-auto">
          {carousel.map((carousel) => (
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12" key={carousel.id}>
              <div>
                <img src={carousel.img} className="h-96 w-96 p-2"/>
              </div>
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-brandPrimary md:w-3/4 leading-snug">
                  {carousel.text}
                </h1>
                <p className="text-base mb-8 text-naturalGrey">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <button className="px-4 py-2 bg-brandPrimary text-white rounded hover:bg-naturalGreyB transition-all duration-300 hover:-translate-y-4 cursor-pointer">
                  Register
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
