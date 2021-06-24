import React, { useState } from "react";
import MobileNavbar from "./MobileNav.js";

function MobileNavConatiner() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
        <div className="flex bg-gray-900 p-1 pb-1" id="nav-container">
            <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <span className="w-full flex justify-center	pr-12 text-white">                        
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Crimes API  

            </span>                
        </div>
        <div className={isMenuOpen ? "" : "hidden"} id="nav-content" tabindex="0">
                <MobileNavbar></MobileNavbar>
        </div>
        </div>
    );
}

export default MobileNavConatiner;
