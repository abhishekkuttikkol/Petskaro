import React, { useContext, useEffect, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";
import { App } from "../Firebase/config";
import { AuthContext } from "../Store/AuthContext";

let TotalCost = 0

const Cart = () => {
  useEffect(() => {
    App.firestore()
      .collection("cart")
      .where("userId", "==", user.uid)
      .onSnapshot((snapshot) => {
        const allPosts = snapshot.docs.map((pet) => {
          TotalCost += pet.data().price
          return { ...pet.data(), id: pet.id };
        });
        setPets(allPosts);
      });
  }, []);
  const { user } = useContext(AuthContext);
  const [pets, setPets] = useState([]);
  console.log(pets);
  const history = useHistory();

  const RemovePet = (itemId, price) =>{
    TotalCost = TotalCost - price
    App.firestore().collection('cart').doc(itemId).delete()
  }
  return (
    <div>
      <div>
        <div>
          <div className="fixed inset-y-0 right-0 pl-0 max-w-full flex">
              <div className="w-screen ">
                <div className="h-full flex flex-col bg-white shadow-xl ">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <div className="text-lg font-medium text-gray-900">
                        Shopping Bag
                      </div>
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
                            
                            <li onClick={()=>{
                              history.push(`/pets:${pet.petId}`)
                            }} key={pet.id} className="cursor-pointer py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
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
                                    <p className="ml-4">{pet.price}</p>
                                  </div>
                                  
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <p className="text-gray-500">
                                    {pet.description}
                                  </p>

                                  <div className="flex">
                                    <button
                                      onClick={()=>{
                                        RemovePet(pet.id, pet.price)
                                      }}
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>{TotalCost}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <a className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        or{" "}
                        <button
                          onClick={()=>{
                            history.push('/')
                          }}
                          type="button"
                          className="text-indigo-600 font-medium hover:text-indigo-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Cart;
