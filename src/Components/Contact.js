import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../Firebase/config";
import petskaro from "../petskaro.png";
import SendIcon from '@material-ui/icons/Send';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      db.collection('feedback').add({
          name:name,
          email:email,
          feedback:message
      }).then(()=>{
          history.push('/')
      })
      
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
        <img
            className="mx-auto h-40 w-auto"
            src={petskaro}
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none mt-3 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
        
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <textarea rows="4" cols="50"
                id="password"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                type="message"
                autoComplete="message"
                required
                className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Feedback"
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
                Send
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default Contact
