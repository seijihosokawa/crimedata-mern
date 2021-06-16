import React from 'react';
import SideBar from './Sidebar.js';


const App = () => {
    return(
        <div className="flex flex-no-wrap bg-gradient-to-r from-gray-800 to-blue-800">
            <div id="sidebar" className="fixed h-screen">
                <SideBar></SideBar>
            </div>
            <div id="content" className="container mx-auto py-10 h-full md:w-4/5 px-6 divide-y divide-gray-400 pl-32">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="flex flex-row w-full pb-12">
                    <div id="intro" className="container w-1/2 p-4">
                        <h1 className="text-gray-100 text-3xl">Introduction</h1>
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
                    <div className="container w-1/2 p-4">
                        <h1 className="text-gray-100 text-3xl text-opacity-0 pb-6">Data/Code</h1>
                        <div className="text-sm">
                            <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > BASE URL</p>
                            <code>                                
                                <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">https://vercel.host.com</p>
                            </code>                        
                        </div>
                    </div>                
                </div>
                <div className="flex flex-row w-full pb-12">
                    <div id="references" className="container w-1/2 p-4">
                        <h1 className="text-gray-100 text-3xl">References</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Here are the   
                        <a className="text-blue-600 hover:text-gray-300 pl-1" href="https://app.swaggerhub.com/apis-docs/seijih/crimes/1.0.0">Swagger Hub</a> API definitions.</p>
                        <p className="pt-6 pb-2 pr-2 text-blue-200"> Here is the <a className="text-blue-600 hover:text-gray-300 pl-1" href="https://crime-data-explorer.app.cloud.gov/pages/downloads">FBI Crime Data Explorer.</a></p>
                    </div>         
                </div>

                <div  className="flex flex-row w-full pt-12 pb-6">
                    <div id="errors" className="container w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">Errors</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This API uses conventional HTTP responses to indicate whether an API request succeeded or failed.

                        </p>
                        
                    </div>
                    <div className="container w-1/2 p-4">
                        <h1 className="text-gray-100 text-3xl text-opacity-0 pb-6">Data/Code</h1>
                        <div className="text-sm">
                            <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > HTTP STATUS CODES</p>
                            <code>                                
                                <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm grid grid-cols-3 gap-4">
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

                <div id="summary" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">Summary Reporting System</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This dataset contains estimated data at the state and national level and was derived from the 
                        Summary Reporting System (SRS). These data reflect the estimates the FBI has traditionally included in its annual publications. 
                        Download this dataset to see the FBI's estimated crime totals for the nation and all 50 states, 1979 to current year available.</p>
                        <ul className="pt-6 pb-2 pr-2 text-gray-200">
                            <li> - Data Type: Estimated Crimes</li>
                            <li> - Years: 1979-2019</li>
                            <li> - Last Modified: August 25, 2020</li>
                        </ul>
                    </div>
                    <div className="container w-1/2 p-4">
                        <h1 className="text-gray-100 text-3xl text-opacity-0 pb-6">Data/Code</h1>
                        <div className="text-sm">
                            <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > BASE URL</p>
                            <code>                                
                                <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">/v1/summary</p>
                            </code>                        
                        </div>
                        <div className="text-sm pt-4">
                            <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > ENDPOINTS</p>
                            <code>                                
                                <p className="pl-4 pb-1 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /</p>
                                <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /years</p>
                                <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /years/:year</p>
                                <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /years/:yearstart/:yearend</p>
                                <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /years-total</p>
                                <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /years-total/:year</p>
                                <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /years-total/:yearstart/:yearend</p>
                                <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /states</p>
                                <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /states/:id</p>
                                <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /states-list</p>
                                <p className="pl-4 pb-2 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /crimes</p>
                            </code>                        
                        </div>
                    </div>   
                </div>
                <div id="summaryFullData" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">summaryFullData</h1>
                        <p>Attributes</p>                       
                    </div>
                    <div className="container w-1/2 p-4">
                        <h1 className="text-gray-100 text-3xl text-opacity-0 pb-6">Data/Code</h1>
                        <div className="text-sm">
                            <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > Endpoint</p>
                            <code>                                
                                <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">https://vercel.host.com/summary</p>
                            </code>                        
                        </div>
                    </div>   
                </div>
                <div id="summaryGetYearsList" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">summaryGetYearsList</h1>
                        <p>Attributes</p>                       
                    </div>
                    <div className="container w-1/2 p-4">
                        <h1 className="text-gray-100 text-3xl text-opacity-0 pb-6">Data/Code</h1>
                        <div className="text-sm">
                            <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > Endpoint</p>
                            <code>                                
                                <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">https://vercel.host.com/summary</p>
                            </code>                        
                        </div>
                    </div>   
                </div>
                <div id="summaryGetSpecificYear" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">summaryGetSpecificYear</h1>
                        <p>Attributes</p>                       
                    </div>
                    <div className="container w-1/2 p-4">
                        <h1 className="text-gray-100 text-3xl text-opacity-0 pb-6">Data/Code</h1>
                        <div className="text-sm">
                            <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > Endpoint</p>
                            <code>                                
                                <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">https://vercel.host.com/summary</p>
                            </code>                        
                        </div>
                    </div>   
                </div>
                <div id="summaryGetYearRange" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">summaryGetYearRange</h1>
                        <p>Attributes</p>                       
                    </div>
                    <div className="container w-1/2 p-4">
                        <h1 className="text-gray-100 text-3xl text-opacity-0 pb-6">Data/Code</h1>
                        <div className="text-sm">
                            <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > Endpoint</p>
                            <code>                                
                                <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">https://vercel.host.com/summary</p>
                            </code>                        
                        </div>
                    </div>   
                </div>

            </div>
        </div>
    )
}

export default App;