import React from "react";
import { FaArrowRight} from 'react-icons/fa6'
const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      img: "/src/assets/product (1).png",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      img: "/src/assets/product (2).png",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      img: "/src/assets/service.png",
    },
  ];

  return (
    <div className="bg-naturalSilver py-16">
      <div className="w-10/12 m-auto">
      <div className="md:w-1/2 m-auto text-center">
        <h2 className="text-4xl text-naturalGrey font-semibold mb-2">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="text-naturalGrey text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
      </div>


      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-center py-8">
        {
            blogs.map(blog=> <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer border border-brandPrimary border-opacity-50 rounded-lg">
                <img src={blog.img} className="w-96 h-96 hover:scale-95 transition-all duration-300"/>
                <div className="text-center px-4 py-8 bg-white shadow-sm rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-8">
                    <h3 className="mb-3 text-naturalGrey">{blog.title}</h3>
                    <div>
                    <a href="/" className="text-brandPrimary font-semibold flex items-center justify-center gap-4"><span>Read more</span><FaArrowRight className="text-xl"/></a>
                  </div>
                </div>
            </div>)
        }
      </div>
    </div>
    </div>
    
  );
};

export default Blog;
