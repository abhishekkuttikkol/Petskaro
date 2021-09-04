import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { App, db } from "../Firebase/config";
import { AuthContext } from "../Store/AuthContext";

const ViewProduct = () => {
  const [pet, setPet] = useState([]);
  const { user } = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    const petId = window.location.pathname.split(":")[1];
    App.firestore()
      .collection("pets")
      .doc(petId)
      .get()
      .then((snapshot) => {
        const allPosts = { ...snapshot.data(), id: snapshot.id };
        setPet(allPosts);
      });
  }, []);

  const WishList = (e) => {
    e.preventDefault();
    if (user) {
      db.collection("favourite")
        .add({
          userId: user.uid,
          petId: pet.id,
          imageSrc: pet.imageSrc,
          name: pet.name,
          price: pet.price,
          description: pet.description,
        })
        .then(() => {
          alert(`${pet.name} is added to WishList`);
        });
    } else {
      history.push("/sign-in");
    }
  };

  const BuyNow = (e) => {
    e.preventDefault();
    if (user) {
      db.collection("orders")
        .add({
          userId: user.uid,
          id: pet.id,
          imageSrc: pet.imageSrc,
          name: pet.name,
          price: pet.price,
          description: pet.description,
          userName: user.displayName,
          sellerId:pet.sellerId
        })
        .then(() => {
          alert(`${pet.name} is added to Cart`);
        });
    } else {
      history.push("/sign-in");
    }
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
            <li className="text-sm">
              <a
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {pet.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {pet.imageSrc2 && (
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                src={pet.imageSrc2}
                alt={pet.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
          )}
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            {pet.imageSrc3 && (
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src={pet.imageSrc3}
                  alt={pet.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            )}
            {pet.imageSrc4 && (
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src={pet.imageSrc4}
                  alt={pet.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            )}
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={pet.imageSrc}
              alt={pet.name}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {pet.name}
            </h1>
          </div>

          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">Price : {pet.price}</p>
            <h3 className="text-md mt-16 font-medium text-gray-900">
              Seller Details :
            </h3>
            <div className="mt-4">
              <ul className="pl-4 list-disc text-md space-y-2">
                <li className="text-gray-400">
                  <span className="text-gray-600">Name : {pet.sellerName}</span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Phone : {pet.sellerPhone}
                  </span>
                </li>
              </ul>
            </div>
            <form className="mt-6 flex">
              <button
                onClick={BuyNow}
                type="submit"
                className="mt-10 m-2 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Buy Now
              </button>
              <button
                onClick={WishList}
                type="submit"
                className="mt-10 m-2 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to Wishlist
              </button>
            </form>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{pet.description}</p>
              </div>
            </div>

            {pet.highlights && (
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul className="pl-4 list-disc text-sm space-y-2">
                    {pet.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {pet.details && (
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{pet.details}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
