import React from 'react'

const Footer = () => {
    return (
        
        <div class="bg-gray-300 rounded-md pt-6 pb-0 ">
            <div tabindex="0" aria-label="footer" class="focus:outline-none mx-auto container flex flex-col items-center justify-center">
                {/* <div className="" tabindex="0" aria-label="prodify logo" role="img">
                    <img class="h-40" src={petskaro} alt=""/>
                </div> */}
                <div class="text-black flex flex-col md:items-center f-f-l pt-3">
                    <h1 tabindex="0" class="focus:outline-none text-center text-2xl font-black">Petskaro</h1>
                    {/* <div class="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                        <h2  class=" md:mr-6 pb-4 md:py-0 cursor-pointer"><a  class="focus:outline-none focus:underline hover:text-gray-700">Privacy Policy</a> </h2>
                        <h2  class="cursor-pointer"><a class="focus:outline-none focus:underline hover:text-gray-700">License</a> </h2>
                    </div> */}
                    
                    <div class="text-sm text-color mb-3 f-f-l">
                        <p tabindex="0" class="focus:outline-none">© 2021 Copyrights. All rights reserved</p>
                    </div>
                </div>
                <div class="w-9/12 h-0.5 bg-gray-100 rounded-full"></div>
                </div>
            </div>
    
    )
}

export default Footer
