import React, { useContext, useEffect, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";
import { App } from "../Firebase/config";
import { AuthContext } from "../Store/AuthContext";
import Spinner from "./Spinner";

const MyPosts = () => {
  useEffect(() => {
    setLoading(true);
    App.firestore()
      .collection("pets")
      .where("sellerId", "==", user.uid)
      .onSnapshot((snapshot) => {
        const allPosts = snapshot.docs.map((pet) => {
          return { ...pet.data(), ItemId: pet.id };
        });
        setPets(allPosts);
        setLoading(false);
      });
  }, []);
  const [loading, setLoading] = useState(false);
  const [pets, setPets] = useState([]);
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const deleteImage = (url) => {
    let imageRef = App.storage().refFromURL(url);
    imageRef
      .delete()
      .then(() => {
        console.log("Deleted");
      })
      .catch((err) => console.log(err));
  };

  const RemovePet = (itemId, imageUrl, imageUrl1, imageUrl2, imageUrl3) => {
    setLoading(true);
    deleteImage(imageUrl);
    if (imageUrl1) {
      deleteImage(imageUrl1);
    }
    if (imageUrl2) {
      deleteImage(imageUrl2);
    }
    if (imageUrl3) {
      deleteImage(imageUrl3);
    }
    App.firestore().collection("pets").doc(itemId).delete();
    setLoading(false);
  };

  window.onload = function () {
    window.location.href = "/";
  };

  return (
    <div>
      <div>
        <div>
          {loading ? (
            <Spinner />
          ) : (
            <div className="fixed inset-y-0 right-0 pl-0 max-w-full flex">
              <div className="w-screen ">
                <div className="h-full flex flex-col bg-white shadow-xl ">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      {pets.length > 0 ? (
                        <div className="text-lg font-medium text-gray-900">
                          My Posts
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
                                  history.push(`/pets:${pet.ItemId}`);
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
                                    <p className="ml-4">{pet.price}</p>
                                  </div>
                                </div>

                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <p className="text-gray-500">
                                    {pet.description}
                                  </p>

                                  <div className="flex">
                                    <button
                                      onClick={() => {
                                        RemovePet(
                                          pet.ItemId,
                                          pet.imageSrc,
                                          pet.imageSrc2,
                                          pet.imageSrc3,
                                          pet.imageSrc4
                                        );
                                      }}
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Delete Post
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
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
