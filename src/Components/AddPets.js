import React, { useContext, useEffect, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { App } from "../Firebase/config";
import { AuthContext } from "../Store/AuthContext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router";
import Spinner from "./Spinner";

const Addpets = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerAddress, setSellerAddress] = useState("");
  const [sellerPlace, setSellerPlace] = useState("");
  const [sellerPhone, setSellerPhone] = useState("");
  const [image, setImage] = useState([]);
  const [urls, setUrls] = useState([]);

  const { user } = useContext(AuthContext);
  const history = useHistory();
  const promises = [];

  useEffect(() => {
    console.log(urls.length);
    console.log(image.length);
    if (urls.length === image.length) {
      if (urls.length !== 0) {
        uploadData();
      }
    }
  }, [urls]);

  const uploadData = () => {
    App.firestore()
      .collection("pets")
      .add({
        sellerId: user.uid,
        description: description,
        details: details,
        imageSrc: urls[0],
        imageSrc2: urls[1],
        imageSrc3: urls[2],
        imageSrc4: urls[3],
        name: name,
        price: price,
        sellerAddress: sellerAddress,
        sellerName: sellerName,
        sellerPhone: sellerPhone,
        sellerPlace: sellerPlace,
      })
      .then(() => {
        setLoading(false);
        alert("Upload successful");
        history.push("/");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    image.map((image) => {
      const uploadTask = App.storage().ref(`images/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        async () => {
          await App.storage()
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((urls) => {
              setUrls((prevState) => [...prevState, urls]);
            });
        }
      );
      return null;
    });

    Promise.all(promises)
      .then(() => {})
      .catch((err) => console.log(err));
  };

  console.log("images: ", image);
  console.log("urls", urls);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImage((prevState) => [...prevState, newImage]);
    }
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
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

                    <option>----</option>
                    <option>Bird</option>
                    <option>Pegion</option>
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
                    placeholder="Breed of the Pet"
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
                      Photo - Maximum 4 Photos
                    </label>
                    <div className="mt-1 flex items-center">
                      {/* <span className="inline-block h-12 w-12  overflow-hidden bg-gray-100">
                        {image && (
                          <img
                            className="w-full h-full"
                            src={image && URL.createObjectURL(image)}
                            alt=""
                          />
                        )}
                      </span> */}
                      <input
                        required
                        onChange={(e) => {
                          // setImage(e.target.files[0]);
                          handleChange(e);
                        }}
                        type="file"
                        multiple
                        className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
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
      )}
    </div>
  );
};

export default Addpets;
