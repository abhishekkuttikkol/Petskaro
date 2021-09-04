import React, { useContext, useState } from "react";
import petskaro from "../petskaro.png";
import SendIcon from "@material-ui/icons/Send";
import { OrderPlaceContext } from "../Store/OrderContext";
import { db } from "../Firebase/config";
import { useHistory } from "react-router";
import firebase from "firebase";

const Order = () => {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const history = useHistory();
  const { details } = useContext(OrderPlaceContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("orders")
      .add({
        ...details,
        userPhone: phone,
        userAddress: address,
        userCity: city,
        userPin: pin,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        alert("Order Placed Successfully");
        history.push("/");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-40 w-auto" src={petskaro} alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Place Order
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">
                Phone
              </label>
              <input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="appearance-none mt-3 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Address
              </label>
              <input
                id="email-address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                name="address"
                type="text"
                autoComplete="text"
                required
                className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Address"
              />
            </div>
            <div>
              <label className="sr-only">City</label>
              <input
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                name="city"
                type="text"
                autoComplete="text"
                required
                className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="City"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Pin Code
              </label>
              <input
                id="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                name="pin"
                type="pin"
                autoComplete="pin"
                required
                className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Pin Code"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <SendIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
