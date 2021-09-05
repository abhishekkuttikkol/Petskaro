import React, { useContext, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { App } from "../Firebase/config";
import { AuthContext } from "../Store/AuthContext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router";

const Addpets = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerAddress, setSellerAddress] = useState("");
  const [sellerPlace, setSellerPlace] = useState("");
  const [sellerPhone, setSellerPhone] = useState("");
  const [image, setImage] = useState("");
  // const [image1, setImage1] = useState("");
  // const [image2, setImage2] = useState("");
  // const [image3, setImage3] = useState("");
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    App.storage()
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          App.firestore()
            .collection("pets")
            .add({
              sellerId: user.uid,
              description: description,
              details: details,
              imageSrc: url,
              name: name,
              price: price,
              sellerAddress: sellerAddress,
              sellerName: sellerName,
              sellerPhone: sellerPhone,
              sellerPlace: sellerPlace,
            })
            .then(() => {
              alert("Upload successful");
              history.push("/");
            });
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sell Pets
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <select
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                class="block appearance-none mt-3 rounded-md relative  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="grid-state"
                placeholder="Type of Pet"
              >
                <ExpandMoreIcon />

                <option></option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Fish</option>
              </select>
            </div>
            <div>
              <input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                type="text"
                autoComplete="description"
                required
                className="appearance-none mt-3 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Description"
              />
            </div>
            <div>
              <input
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                name="details"
                type="details"
                autoComplete="details"
                className="appearance-none mt-3 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Details (optional)"
              />
            </div>
            <div>
              <input
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                name="price"
                type="price"
                autoComplete="price"
                required
                className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Price"
              />
            </div>
            <div>
              <input
                id="seller name"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                name="seller name"
                type="name"
                autoComplete="name"
                required
                className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Seller Name"
              />
            </div>
            <div>
              <input
                id="seller address"
                value={sellerAddress}
                onChange={(e) => setSellerAddress(e.target.value)}
                name="seller address"
                type="address"
                autoComplete="address"
                required
                className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Seller Address with Pin"
              />
            </div>
            <div className="flex">
              <input
                id="seller place"
                value={sellerPlace}
                onChange={(e) => setSellerPlace(e.target.value)}
                name="seller place"
                type="place"
                autoComplete="place"
                required
                className="appearance-none mr-2 rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Seller Place"
              />
              <input
                id="seller phone"
                value={sellerPhone}
                onChange={(e) => setSellerPhone(e.target.value)}
                name="seller phone"
                type="tel"
                autoComplete="tel"
                required
                className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Seller Phone"
              />
            </div>
            <div className="flex">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Photo - 1
                </label>
                <div className="mt-1 flex items-center">
                  <span className="inline-block h-12 w-12  overflow-hidden bg-gray-100">
                    {image && (
                      <img
                        className="w-full h-full"
                        src={image && URL.createObjectURL(image)}
                        alt=""
                      />
                    )}
                  </span>
                  <input
                    required
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                    type="file"
                    className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-700">
                  Photo - 2 (optional)
                </label>
                <div className="mt-1 flex items-center">
                  <span className="inline-block h-12 w-12  overflow-hidden bg-gray-100">
                    {image1 && (
                      <img
                        className="w-full h-full"
                        src={image1 && URL.createObjectURL(image1)}
                        alt=""
                      />
                    )}
                  </span>
                  <input
                    onChange={(e) => {
                      setImage1(e.target.files[0]);
                    }}
                    type="file"
                    className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div> */}
            </div>

            {/* <div className="flex">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Photo - 3 (optional)
                </label>
                <div className="mt-1 flex items-center">
                  <span className="inline-block h-12 w-12  overflow-hidden bg-gray-100">
                    {image2 && (
                      <img
                        className="w-full h-full"
                        src={image2 && URL.createObjectURL(image2)}
                        alt=""
                      />
                    )}
                  </span>
                  <input
                    onChange={(e) => {
                      setImage2(e.target.files[0]);
                    }}
                    type="file"
                    className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Photo - 4 (optional)
                </label>
                <div className="mt-1 flex items-center">
                  <span className="inline-block h-12 w-12  overflow-hidden bg-gray-100">
                    {image3 && (
                      <img
                        className="w-full h-full"
                        src={image3 && URL.createObjectURL(image3)}
                        alt=""
                      />
                    )}
                  </span>
                  <input
                    onChange={(e) => {
                      setImage3(e.target.files[0]);
                    }}
                    type="file"
                    className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
            </div> */}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sell
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addpets;
