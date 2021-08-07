import React from 'react';
import './MainNavbarStyle.css'; 
import { Link as MainLink } from 'react-router-dom';


const MainNavbar = (dataset) => {
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
                        <div id="dropdown-content-data" className="rounded h-62 w-96 mt-2 p-4 text-gray-300 bg-gray-900">
                            <div id="arrow-up" className="absolute -top-2 right-12 text-gray-900"></div>
                            <ul className="space-y-2">
                                <li>
                                    <div id="dropdown-item" className="flex cursor-pointer transition duration-500 hover:text-gray-400" onClick={event => dataset.onChange("summary")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <p className="">Summary</p>
                                        <div id="dropdown-item-arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="pt-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 pl-2">Estimated Crime Totals by Year or State</p>

                                </li>
                                <li>
                                    <div id="dropdown-item" className="flex cursor-pointer transition duration-500 hover:text-gray-400" onClick={event => dataset.onChange("arrests")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <p className="">Arrests</p>
                                        <div id="dropdown-item-arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="pt-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 pl-2">National Arrests Each Year by Offense</p></li>
                                <li>
                                    <div id="dropdown-item" className="flex cursor-pointer transition duration-500 hover:text-gray-400" onClick={event => dataset.onChange("drug-arrests")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <p className="">Drug Arrests</p>
                                        <div id="dropdown-item-arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="pt-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 pl-2">National Drug Arrests Each Year</p>
                                </li>
                                <li>                                    
                                    <div id="dropdown-item" className="flex cursor-pointer transition duration-500 hover:text-gray-400" onClick={event => dataset.onChange("juvenile-arrests")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <p className="">Juvenile Arrests</p>
                                        <div id="dropdown-item-arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="pt-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 pb-2 pl-2">Juvenile Arrests Each Year by Offense</p>
                                </li>
                            </ul>   
                        </div>  
                    </div>
                    
                    <div id="dropdown-dev" className="transition duration-500 hover:text-gray-400">                        
                        Developers

                        <div id="dropdown-content-dev" className="rounded h-44 w-96 p-4 mt-2 text-gray-300 bg-gray-900">
                            <div id="arrow-up" className="absolute -top-2 left-12 text-gray-900"></div>
                            
                            <div id="dropdown-item" className="flex cursor-pointer transition duration-500 hover:text-gray-400">
                                <MainLink className="flex" to="/docs/api">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pr-1 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                    </svg>
                                    <p className="pl-1">Documentation</p>
                                </MainLink>
                                <div id="dropdown-item-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pt-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>                               
                            </div>
                            <p className="text-sm text-gray-500 pl-1">Start using Crimes Data API</p>
                            <div className="grid grid-cols-2 gap-4 pt-8 text-sm text-gray-400">
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pb-1 h-6 w-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                    Full API References</div>
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pb-1 h-6 w-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Code Examples</div>
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pb-1 h-6 w-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                    </svg>
                                    Support</div>
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="pb-1 h-6 w-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                    </svg>
                                    Detailed Enpoints</div>
                            </div>

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