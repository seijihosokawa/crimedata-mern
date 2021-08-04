import React from 'react';
import './MainNavbarStyle.css'; 
import { Link as MainLink } from 'react-router-dom';


const MainNavbar = () => {
    return (
        <div className="w-full">
            <nav className=" hidden md:flex relative py-3 px-12 flex-wrap justify-between text-white">
                <div className="flex items-center">                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        Crime Data  
                </div>
                <div className="flex items-center space-x-24 text-gray-200">
                    <div id="dropdown-data" className="transition duration-500 hover:text-gray-400">                        
                        Datasets  
                        <div id="dropdown-content-data" className="rounded h-24 w-60 p-4 mt-2 text-gray-300 bg-gray-900">
                            <p>drop down contnet</p>    
                        </div>  
                    </div>
                    <div id="dropdown-dev" className="transition duration-500 hover:text-gray-400">                        
                        Developers
                        <div id="dropdown-content-dev" className="rounded h-24 w-60 p-4 mt-2 text-gray-300 bg-gray-900">
                            <p>drop down contnet</p>    
                        </div>  
                    </div>
                    
                </div>
                <div className="items-right transition duration-500 hover:text-gray-500">
                    <MainLink to="/docs/api">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    </MainLink>
                </div>            
            </nav>
        </div>
    )
}

export default MainNavbar;