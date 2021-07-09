import React, { useState } from "react";
import { Link } from 'react-scroll';

function Navbar() {
    const [hideSummary, setHideSummary] = useState(true);
    const [hideArrests, setHideArrests] = useState(true);
    const [hideDrugArrests, setHideDrugArrests] = useState(true);
    const [hideJuvenileArrests, setHideJuvenileArrests] = useState(true);

    return (
            <div className="w-full md:w-48 sm:hide h-full bg-gray-900 shadow flex-col justify-between pt-1 overflow-y-auto">
                <div className="px-8 pb-1">
                    <div className="hidden md:flex w-full h-16 items-center text-white">                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        Crimes API  
                    </div>
                    <ul className="mt-2">
                        <li className="flex w-full justify-between text-gray-300 hover:text-blue-300 cursor-pointer items-center mb-4">
                            <Link to="intro">
                                <div className="flex items-center">
                                    <span className="text-sm  ">Introduction</span>
                                </div>
                            </Link>
                        </li>
                        <li className="flex w-full justify-between text-gray-300 hover:text-blue-300 cursor-pointer items-center mb-4">
                            <Link to="references">
                                <div className="flex items-center">
                                    <span className="text-sm  ">References</span>
                                </div>
                            </Link>
                        </li>
                        <li className="flex w-full justify-between text-gray-300 hover:text-blue-300 cursor-pointer items-center mb-4">
                            <Link to="errors">                            
                                <div className="flex items-center">
                                    <span className="text-sm  ">Errors</span>
                                </div>
                            </Link>
                        </li>
                        <li className="flex w-full justify-between text-gray-300 hover:text-blue-300 cursor-pointer mb-4" onClick={() => setHideSummary(!hideSummary)}>            
                                <div className="flex ">
                                    <Link to="summary">
                                    <span className="text-sm ">Summary</span>
                                    </Link>

                                    { hideSummary === true &&
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                    }
                                    { hideSummary === false &&
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                                    </svg>
                                    }
                                </div>
                        </li>
                        { hideSummary === false &&
                        <div>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="summaryObject">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Summary Object</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="summaryFullData">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Full Data</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="summaryGetYearsList">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get List of Years</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="summaryGetSpecificYear">
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get Specific Years</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="summaryGetYearRange">
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get Range of Years</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="summaryGetYearTotals">
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get Year Totals</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="summaryGetSpecificYearTotals">
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get Specific Year Totals</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="summaryGetYearTotalsRange">
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get Range of Year Totals</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="summaryGetStates">
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get List of States Abbreviated</span>
                                    </div>
                                </Link>    
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="summaryGetStatesById">
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get a Specific State</span>
                                    </div>
                                </Link>                            
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="summaryGetStatesYear">
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get a Specific State Year</span>
                                    </div>
                                </Link>                            
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="summaryGetStatesYearRange">
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get a Specific State's Range of Years</span>
                                    </div>
                                </Link>                            
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="summaryGetStatesList">
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get List of States Full</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="summaryGetCrimes">
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get List of Crimes Tracked</span>
                                    </div>
                                </Link>
                            </li>
                        </div>
                        }
                        <li className="flex w-full justify-between text-gray-300 hover:text-blue-300 cursor-pointer mb-4" onClick={() => setHideArrests(!hideArrests)}>            
                                <div className="flex float-right">
                                    <Link to="arrests">
                                    <span className="text-sm ">Arrests</span>
                                    </Link>

                                    { hideArrests === true &&
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                    }
                                    { hideArrests === false &&
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                                    </svg>
                                    }
                                </div>
                        </li>
                        { hideArrests === false &&
                        <div>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="arrestsObject">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Arrests Object</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="arrestsFullData">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Full Data</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="arrestsGetYearsList">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get List of Years</span>
                                    </div>
                                </Link>
                            </li>  
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="arrestsGetSpecificYear">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get Specific Year</span>
                                    </div>
                                </Link>
                            </li>  
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="arrestsGetYearRange">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get Range of Years</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="arrestsGetOffenses">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get List of Offenses</span>
                                    </div>
                                </Link>
                            </li>       
                        </div>
                        }
                        <li className="flex w-full justify-between text-gray-300 hover:text-blue-300 cursor-pointer mb-4" onClick={() => setHideDrugArrests(!hideDrugArrests)}>            
                                <div className="flex float-right">
                                    <Link to="drugArrests">
                                    <span className="text-sm ">Drug Arrests</span>
                                    </Link>

                                    { hideDrugArrests === true &&
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                    }
                                    { hideDrugArrests === false &&
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                                    </svg>
                                    }
                                </div>
                        </li>
                        { hideDrugArrests === false &&
                        <div>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="drugArrestsObject">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Drug Arrests Object</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="drugArrestsFullData">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Full Data</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="arrestsGetYearsList">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get List of Years</span>
                                    </div>
                                </Link>
                            </li>  
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="drugArrestsGetSpecificYear">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get Specific Year</span>
                                    </div>
                                </Link>
                            </li>  
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="drugArrestsGetYearRange">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get Range of Years</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="drugArrestsGetOffenses">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get List of Drug Offenses</span>
                                    </div>
                                </Link>
                            </li>       
                        </div>
                        }
                        <li className="flex w-full justify-between text-gray-300 hover:text-blue-300 cursor-pointer mb-4" onClick={() => setHideJuvenileArrests(!hideJuvenileArrests)}>            
                                <div className="flex">
                                    <Link to="juvenileArrests">
                                    <span className="text-sm">Juvenile Arrests</span>
                                    </Link>

                                    { hideJuvenileArrests === true &&
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                    }
                                    { hideJuvenileArrests === false &&
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                                    </svg>
                                    }
                                </div>
                        </li>
                        { hideJuvenileArrests === false &&
                        <div>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="juvenileArrestsObject">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Juvenile Arrests Object</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="juvenileArrestsFullData">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Full Data</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="juvenileArrestsGetYearsList">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get List of Years</span>
                                    </div>
                                </Link>
                            </li>  
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="juvenileArrestsGetSpecificYear">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get Specific Year</span>
                                    </div>
                                </Link>
                            </li>  
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="juvenileArrestsGetYearRange">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get Range of Years</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-500 hover:text-gray-200 cursor-pointer items-center mb-4">
                                <Link to="juvenileArrestsGetOffenses">                
                                    <div className="flex items-center">
                                        <span className="text-sm ml-1">Get List of Juvenile Offenses</span>
                                    </div>
                                </Link>
                            </li>       
                        </div>
                        }
                    </ul>
                    
                </div>
            </div>
    );
}

export default Navbar;
