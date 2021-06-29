import React from 'react';
import Navbar from './Navbar.js';
import MobileNavConatiner from './MobileNavContainer';
import SummaryApiDocs from './SummaryApiDocs.js';
import ArrestsApiDocs from './ArrestsApiDocs.js'
import './style.css';


const App = () => {
    return(
        <div id="page" className="flex flex-no-wrap bg-gray-800">
            <div id="navbar" className="hidden md:block fixed h-screen">
                <Navbar></Navbar>
            </div>
            <div id="mobileNavbar" className="visible md:hidden fixed w-full">
                  <MobileNavConatiner></MobileNavConatiner>
            </div>
            <div id="content" className="container mx-auto py-10 h-full md:w-4/5 px-6 divide-y divide-gray-200 md:pl-32 pl-4">
                <div className="flex flex-row w-full pb-12">
                    <div id="intro" className="container w-full md:w-1/2 p-4">
                        <h1 className="text-gray-100 text-3xl font-medium">Introduction</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">The Crimes Data REST API is focused around delivering U.S. 
                        Crime data from various sources in <a className="text-blue-600 hover:text-gray-300" 
                        href="https://www.json.org/json-en.html">JSON-encoded</a> format. This API has easy to use and understnad endpoints combined with 
                        standard HTTP responses. The API data gathered from the   
                        <a className="text-blue-600 hover:text-gray-300 pl-1" href="https://crime-data-explorer.app.cloud.gov/pages/downloads">Crime Data Explorer</a>.</p>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Current Endpoints:</p>
                        <ul className="text-gray-200">
                            <li> - Summary Reporting System</li>
                        </ul>
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <div className="text-sm rounded border border-gray-500">
                            <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > BASE URL</p>
                            <code>                                
                                <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">https://crimedata-mern.herokuapp.com/</p>
                            </code>                        
                        </div>
                    </div>                
                </div>
                <div className="flex flex-row w-full pb-12">
                    <div id="references" className="container w-full md:w-1/2 p-4">
                        <h1 className="text-gray-100 text-3xl font-medium">References</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Here are the   
                        <a className="text-blue-600 hover:text-gray-300 pl-1" href="https://app.swaggerhub.com/apis-docs/seijih/crimes/1.0.0">Swagger Hub</a> API definitions.</p>
                        <p className="pt-6 pb-2 pr-2 text-blue-200"> Here is the <a className="text-blue-600 hover:text-gray-300 pl-1" href="https://crime-data-explorer.app.cloud.gov/pages/downloads">FBI Crime Data Explorer.</a></p>
                    </div>         
                </div>

                <div  className="flex flex-row w-full pt-12 pb-6">
                    <div id="errors" className="container w-full md:w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl font-medium">Errors</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This API uses conventional HTTP responses to indicate whether an API request succeeded or failed.</p>
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <div className="text-sm rounded border border-gray-500">
                            <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > HTTP STATUS CODES</p>
                            <code>                                
                                <p className="pl-4 pb-3 pt-2 pr-1 rounded-b bg-gray-800 text-gray-300 text-sm grid grid-cols-3 gap-4">
                                    <div>200 - OK</div><div className="col-span-2">Everything worked as expected.</div>
                                    <div>400 - Bad Request</div><div className="col-span-2">The request was unacceptable, often due to missing a required parameter.</div>
                                    <div>402 - Request Failed</div><div className="col-span-2">The parameters were valid but the request failed.</div>
                                    <div>404 - Not Found</div><div className="col-span-2">The requested resource doesn't exist.</div>
                                    <div>500 - Server Errors</div><div className="col-span-2">Something went wrong on our end. (This is rare.)</div>
                                </p>
                            </code>                        
                        </div>
                    </div>   
                </div>
                <SummaryApiDocs></SummaryApiDocs>
                <div className="h-1 w-full bg-gray-200"></div>
                <ArrestsApiDocs></ArrestsApiDocs>                
            </div>
        </div>
    )
}

export default App;