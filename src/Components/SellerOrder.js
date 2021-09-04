import React, { useContext, useEffect, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";
import { App } from "../Firebase/config";
import { AuthContext } from "../Store/AuthContext";

const SellerOrder = () => {
  useEffect(() => {
    App.firestore()
      .collection("orders")
      .where("sellerId", "==", user.uid)
      .onSnapshot((snapshot) => {
        const allPosts = snapshot.docs.map((pet) => {
          return { ...pet.data(), ItemId: pet.id };
        });
        setPets(allPosts);
      });
  }, []);
  const [pets, setPets] = useState([]);
  const { user } = useContext(AuthContext);
  const history = useHistory();

  window.onload = function () {
    window.location.href = "/";
  };

  return (
    <div className="fixed inset-y-0 right-0 pl-0 max-w-full flex">
      <div className="w-screen ">
        <div className="h-full flex flex-col bg-white shadow-xl ">
          <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
            <div className="flex items-start justify-between">
              {pets.length > 0 ? (
                <div className="text-lg font-medium text-gray-900">
                  My Orders
                </div>
              ) : (
                <div className="text-lg font-medium text-gray-900">
                  My Orders - No Items Found
                </div>
              )}
              <div className="ml-3 h-7 flex items-center">
                <button
                  type="button"
                  className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  <span className="sr-only">Close panel</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200">
                  {pets.map((pet) => (
                    <li key={pet.id} className=" py-6 flex">
                      <div
                        onClick={() => {
                          history.push(`/pets:${pet.id}`);
                        }}
                        className="cursor-pointer flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden"
                      >
                        <img
                          src={pet.imageSrc}
                          alt={pet.name}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>

                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a>{pet.name}</a>
                            </h3>
                            
                            <p className="ml-4">RS.{pet.price}</p>
                          </div>
                        </div>
                        <div className="flex-1 flex  justify-between text-sm">
                          <p className="text-gray-500">
                            Ordered By {pet.userName}
                          </p>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <p className="text-gray-500">
                            Address : {pet.userAddress} , {pet.userCity} ,
                            {pet.userPin}
                          </p>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <p className="text-gray-500">
                            Phone : {pet.userPhone}
                          </p>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                        <p className='text-gray-500'>{(new Date(pet.timestamp)).toDateString()} {(new Date(pet.timestamp)).toTimeString()}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerOrder;
