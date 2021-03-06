import React from "react";

const Posts = ({ pet }) => {
  return (
    <div>
      <div class=" lg:w-full mb-4 p-2 cursor-pointer">
        <div class="shadow-xl rounded-2xl p-5 bg-white dark:bg-gray-700 w-full">
          <div key={pet.id} className="group relative">
            <div className="relative  w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src={pet.imageSrc}
                alt={pet.imageAlt}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
              <p className="absolute w-full py-2.5 bottom-0 inset-x-0 text-white text-xl text-center">{pet.sellerPlace}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={pet.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {pet.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{pet.description}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                &#x20B9; {pet.price}/-
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
