import React, { useContext } from "react";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
import { SidebarContext } from "../Store/SidebarContext";

const solutions = [
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },

  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const {setopen} = useContext(SidebarContext)
  const history = useHistory();
  return (
    // <Popover className="relative z-10 bg-white">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6">
    //     <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
    //       <div className="flex justify-start lg:w-0 lg:flex-1">
    //         <a href="#">
    //           <span className="sr-only">Workflow</span>
    //           <img
    //             className="h-8 w-auto sm:h-10"
    //             src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
    //             alt=""
    //           />
    //         </a>
    //       </div>
    //       <div className="-mr-2 -my-2 md:hidden">
    //         <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
    //           <span className="sr-only">Open menu</span>
    //           <MenuIcon className="h-6 w-6" aria-hidden="true" />
    //         </Popover.Button>
    //       </div>
    //       <Popover.Group as="nav" className="hidden md:flex space-x-10">
    //         <Popover className="relative">
    //           {({ open }) => (
    //             <>
    //               <Popover.Button
    //                 className={classNames(
    //                   open ? "text-gray-900" : "text-gray-500",
    //                   "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //                 )}
    //               >
    //                 <span>Solutions</span>
    //                 <ChevronDownIcon
    //                   className={classNames(
    //                     open ? "text-gray-600" : "text-gray-400",
    //                     "ml-2 h-5 w-5 group-hover:text-gray-500"
    //                   )}
    //                   aria-hidden="true"
    //                 />
    //               </Popover.Button>

    //               <Transition
    //                 as={Fragment}
    //                 enter="transition ease-out duration-200"
    //                 enterFrom="opacity-0 translate-y-1"
    //                 enterTo="opacity-100 translate-y-0"
    //                 leave="transition ease-in duration-150"
    //                 leaveFrom="opacity-100 translate-y-0"
    //                 leaveTo="opacity-0 translate-y-1"
    //               >
    //                 <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
    //                   <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
    //                     <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
    //                       {solutions.map((item) => (
    //                         <a
    //                           key={item.name}
    //                           href={item.href}
    //                           className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
    //                         >
    //                           <item.icon
    //                             className="flex-shrink-0 h-6 w-6 text-indigo-600"
    //                             aria-hidden="true"
    //                           />
    //                           <div className="ml-4">
    //                             <p className="text-base font-medium text-gray-900">
    //                               {item.name}
    //                             </p>
    //                             <p className="mt-1 text-sm text-gray-500">
    //                               {item.description}
    //                             </p>
    //                           </div>
    //                         </a>
    //                       ))}
    //                     </div>
    //                     <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
    //                       {callsToAction.map((item) => (
    //                         <div key={item.name} className="flow-root">
    //                           <a
    //                             href={item.href}
    //                             className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
    //                           >
    //                             <item.icon
    //                               className="flex-shrink-0 h-6 w-6 text-gray-400"
    //                               aria-hidden="true"
    //                             />
    //                             <span className="ml-3">{item.name}</span>
    //                           </a>
    //                         </div>
    //                       ))}
    //                     </div>
    //                   </div>
    //                 </Popover.Panel>
    //               </Transition>
    //             </>
    //           )}
    //         </Popover>

    //         <a
    //           href="#"
    //           className="text-base font-medium text-gray-500 hover:text-gray-900"
    //         >
    //           Pricing
    //         </a>
    //         <a
    //           href="#"
    //           className="text-base font-medium text-gray-500 hover:text-gray-900"
    //         >
    //           Docs
    //         </a>

    //         <Popover className="relative">
    //           {({ open }) => (
    //             <>
    //               <Popover.Button
    //                 className={classNames(
    //                   open ? "text-gray-900" : "text-gray-500",
    //                   "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //                 )}
    //               >
    //                 <span>More</span>
    //                 <ChevronDownIcon
    //                   className={classNames(
    //                     open ? "text-gray-600" : "text-gray-400",
    //                     "ml-2 h-5 w-5 group-hover:text-gray-500"
    //                   )}
    //                   aria-hidden="true"
    //                 />
    //               </Popover.Button>

    //               <Transition
    //                 as={Fragment}
    //                 enter="transition ease-out duration-200"
    //                 enterFrom="opacity-0 translate-y-1"
    //                 enterTo="opacity-100 translate-y-0"
    //                 leave="transition ease-in duration-150"
    //                 leaveFrom="opacity-100 translate-y-0"
    //                 leaveTo="opacity-0 translate-y-1"
    //               >
    //                 <Popover.Panel className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
    //                   <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
    //                     <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
    //                       {resources.map((item) => (
    //                         <a
    //                           key={item.name}
    //                           href={item.href}
    //                           className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
    //                         >
    //                           <item.icon
    //                             className="flex-shrink-0 h-6 w-6 text-indigo-600"
    //                             aria-hidden="true"
    //                           />
    //                           <div className="ml-4">
    //                             <p className="text-base font-medium text-gray-900">
    //                               {item.name}
    //                             </p>
    //                             <p className="mt-1 text-sm text-gray-500">
    //                               {item.description}
    //                             </p>
    //                           </div>
    //                         </a>
    //                       ))}
    //                     </div>
    //                     <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
    //                       <div>
    //                         <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
    //                           Recent Posts
    //                         </h3>
    //                         <ul role="list" className="mt-4 space-y-4">
    //                           {recentPosts.map((post) => (
    //                             <li
    //                               key={post.id}
    //                               className="text-base truncate"
    //                             >
    //                               <a
    //                                 href={post.href}
    //                                 className="font-medium text-gray-900 hover:text-gray-700"
    //                               >
    //                                 {post.name}
    //                               </a>
    //                             </li>
    //                           ))}
    //                         </ul>
    //                       </div>
    //                       <div className="mt-5 text-sm">
    //                         <a
    //                           href="#"
    //                           className="font-medium text-indigo-600 hover:text-indigo-500"
    //                         >
    //                           {" "}
    //                           View all posts{" "}
    //                           <span aria-hidden="true">&rarr;</span>
    //                         </a>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </Popover.Panel>
    //               </Transition>
    //             </>
    //           )}
    //         </Popover>
    //       </Popover.Group>
    //       <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
    //         <a
    //           onClick={() => {
    //             history.push("/sign-in");
    //           }}
    //           href="#"
    //           className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
    //         >
    //           Sign in
    //         </a>
    //         <a
    //           onClick={() => {
    //             history.push("/sign-up");
    //           }}
    //           href="#"
    //           className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
    //         >
    //           Sign up
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    //   <Transition
    //     as={Fragment}
    //     enter="duration-200 ease-out"
    //     enterFrom="opacity-0 scale-95"
    //     enterTo="opacity-100 scale-100"
    //     leave="duration-100 ease-in"
    //     leaveFrom="opacity-100 scale-100"
    //     leaveTo="opacity-0 scale-95"
    //   >
    //     <Popover.Panel
    //       focus
    //       className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
    //     >
    //       <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
    //         <div className="pt-5 pb-6 px-5">
    //           <div className="flex items-center justify-between">
    //             <div>
    //               <img
    //                 className="h-8 w-auto"
    //                 src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
    //                 alt="Workflow"
    //               />
    //             </div>
    //             <div className="-mr-2">
    //               <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
    //                 <span className="sr-only">Close menu</span>
    //                 <XIcon className="h-6 w-6" aria-hidden="true" />
    //               </Popover.Button>
    //             </div>
    //           </div>
    //           <div className="mt-6">
    //             <nav className="grid gap-y-8">
    //               {solutions.map((item) => (
    //                 <a
    //                   key={item.name}
    //                   href={item.href}
    //                   className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
    //                 >
    //                   <item.icon
    //                     className="flex-shrink-0 h-6 w-6 text-indigo-600"
    //                     aria-hidden="true"
    //                   />
    //                   <span className="ml-3 text-base font-medium text-gray-900">
    //                     {item.name}
    //                   </span>
    //                 </a>
    //               ))}
    //             </nav>
    //           </div>
    //         </div>
    //         <div className="py-6 px-5 space-y-6">
    //           <div className="grid grid-cols-2 gap-y-4 gap-x-8">
    //             <a
    //               href="#"
    //               className="text-base font-medium text-gray-900 hover:text-gray-700"
    //             >
    //               Pricing
    //             </a>

    //             <a
    //               href="#"
    //               className="text-base font-medium text-gray-900 hover:text-gray-700"
    //             >
    //               Docs
    //             </a>
    //             {resources.map((item) => (
    //               <a
    //                 key={item.name}
    //                 href={item.href}
    //                 className="text-base font-medium text-gray-900 hover:text-gray-700"
    //               >
    //                 {item.name}
    //               </a>
    //             ))}
    //           </div>
    //           <div>
    //             <a
    //               href="#"
    //               className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
    //             >
    //               Sign up
    //             </a>
    //             <p className="mt-6 text-center text-base font-medium text-gray-500">
    //               Existing customer?{" "}
    //               <a href="#" className="text-indigo-600 hover:text-indigo-500">
    //                 Sign in
    //               </a>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </Popover.Panel>
    //   </Transition>
    // </Popover>
    <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
                <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                    <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                        <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                            <div class="relative flex items-center w-full lg:w-64 h-full group">
                                <div class="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                    <svg fill="none" class="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                </div>
                                <svg class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                    </path>
                                </svg>
                                <input type="text" class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="Search"/>
                                    <div class="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                                        +
                                    </div>
                                </div>
                            </div>
                            <div class="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                                <button onClick={()=>{
                                  setopen(true)
                                }} class="md:invisible h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">Menu</button>  
                                <a class="block relative hidden md:block text-gray-500">
                                    <span class="text-base font-normal">Welcome abhishek</span>
                                </a>
                              
                            </div>
                        </div>
                    </div>
                </header>
  );
};

export default Header;
