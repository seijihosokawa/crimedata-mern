import React from 'react';
import SideBar from './sidebar.js';
import ApiCard from './Apicard.js';
import ResponseCard from './ResponseCard.js';


const App = () => {
    let exampleStatesSchema = {"_id":"60c39e9b75fe792bf7e20703","year":1979,"state_abbr":"FL","state_name":"Florida","population":8860000,"violent_crime":73881,"homicide":1084,"rape":4576, "robbery":22097, "aggravated_assault":46124,"property_crime":607281, "burglary":190884,"larceny":378099,"motor_vehicle_theft":38298};
    let exampleTotalsSchema = {"_id":"60d0e80ff8b8f3081570c87a","year":1979,"population":220099000,"violent_crime":1208030,"homicide":21460,"rape":76390,"robbery":480700,"aggravated_assault":629480,"property_crime":11041500,"burglary":3327700,"larceny":6601000,"motor_vehicle_theft":1112800}

    return(
        <div className="flex flex-no-wrap bg-gradient-to-r from-gray-800 to-blue-800">
            <div id="sidebar" className="hidden md:block fixed h-screen collapse">
                <SideBar></SideBar>
            </div>
            <div id="content" className="container mx-auto py-10 h-full md:w-4/5 px-6 divide-y divide-gray-400 md:pl-32 pl-4">
                <div className="flex flex-row w-full pb-12">
                    <div id="intro" className="container w-full md:w-1/2 p-4">
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
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <div className="text-sm">
                            <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > BASE URL</p>
                            <code>                                
                                <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">https://crimedata-mern.herokuapp.com/</p>
                            </code>                        
                        </div>
                    </div>                
                </div>
                <div className="flex flex-row w-full pb-12">
                    <div id="references" className="container w-full md:w-1/2 p-4">
                        <h1 className="text-gray-100 text-3xl">References</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Here are the   
                        <a className="text-blue-600 hover:text-gray-300 pl-1" href="https://app.swaggerhub.com/apis-docs/seijih/crimes/1.0.0">Swagger Hub</a> API definitions.</p>
                        <p className="pt-6 pb-2 pr-2 text-blue-200"> Here is the <a className="text-blue-600 hover:text-gray-300 pl-1" href="https://crime-data-explorer.app.cloud.gov/pages/downloads">FBI Crime Data Explorer.</a></p>
                    </div>         
                </div>

                <div  className="flex flex-row w-full pt-12 pb-6">
                    <div id="errors" className="container w-full md:w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">Errors</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This API uses conventional HTTP responses to indicate whether an API request succeeded or failed.

                        </p>
                        
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <div className="text-sm">
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

                <div id="summary" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-full md:w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">Summary Reporting System</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This dataset contains estimated data at the state and national level and was derived from the 
                        Summary Reporting System (SRS). These data reflect the estimates the FBI has traditionally included in its annual publications. 
                        Download this dataset to see the FBI's estimated crime totals for the nation and all 50 states, 1979 to current year available.</p>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">The purpose of this endpoint is to give an overall summary of crimes committed by year or state.</p>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Here are the Summary Reporting System<a className="text-blue-600 hover:text-gray-300" href="https://ofm.wa.gov/sites/default/files/public/legacy/sac/pdf/srs/srs_dictionary.pdf"> Data Definitions</a>.</p>
                        <ul className="pt-6 pb-2 pr-2 text-gray-200">
                            <li> - Data Type: Estimated Crimes</li>
                            <li> - Years: 1979-2019</li>
                            <li> - Last Modified: August 25, 2020</li>
                        </ul>
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <div className="text-sm">
                            <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > BASE URL</p>
                            <code>                                
                                <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">https://crimedata-mern.herokuapp.com/v1/summary</p>
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
                <div id="summaryObject" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-full md:w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">The Summary Object</h1>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Attributes</p>
                            <div>
                                <p className="pt-2 pb-2 pr-2 text-gray-200">_id <span className="pl-2 text-gray-400 text-sm">string</span></p>
                                <p className=" pb-2 text-gray-400 text-sm">MongoDB Object Id</p>
                            </div>
                            <div>
                                <p className="pt-2 pb-2 pr-2 text-gray-200">year <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                                <p className="pb-2 text-gray-400 text-sm">The year the JSON response data is estimated of. The year range for this endpoint is between 1979 and 2019.</p>
                            </div>
                            <div>
                                <p className="pt-2 pb-2 pr-2 text-gray-200">state_abbr <span className="pl-2 text-gray-400 text-sm">string</span></p>
                                <p className="pb-2 text-gray-400 text-sm"> This is a two letter state abbreviation. You can find a list of the two letter state abbreviation for each state 
                                <a className="text-blue-600 hover:text-gray-300" href="https://www.ssa.gov/international/coc-docs/states.html"> here</a>.</p>

                            </div>
                            <div>
                                <p className="pt-2 pb-2 pr-2 text-gray-200">state_name <span className="pl-2 text-gray-400 text-sm">string</span></p>
                                <p className="pb-2 text-gray-400 text-sm"> The full name of the state.</p>
                            </div>
                            <div>
                                <p className="pt-2 pb-2 pr-2 text-gray-200">population <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                                <p className="pb-2 text-gray-400 text-sm">This is estimated population for the state/total United States for the given year.</p>
                            </div>
                            <div>
                                <p className="pt-2 pb-2 pr-2 text-gray-200">violent_crime <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                                <p className="pb-2 text-gray-400 text-sm">This is defined as the total number of violent crimes reported including murder, rape, robbery, and aggravated assault. </p>
                            </div>
                            <div>
                                <p className="pt-2 pb-2 pr-2 text-gray-200">homicide <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                                <p className="pb-2 text-gray-400 text-sm">The willful killing of one person by another or the killing of another person through gross negligence. 
                                Also includes the non-violent offense of Controlled Substance Homicide.</p>
                            </div>
                            <div>
                                <p className="pt-2 pb-2 pr-2 text-gray-200">rape <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                                <p className="pb-2 text-gray-400 text-sm">The definition of rape changed on <a className="text-blue-600 hover:text-gray-300" href="https://www.justice.gov/archives/opa/blog/updated-definition-rape">January 6, 2012 </a>
                                    to <span className="italic">"the penetration, no matter how slight, of the vagina or anus with any body part or object, or oral penetration by a sex organ of another person, without the consent of the victim." </span>
                                The old definition of rape (before 2012): <span className="italic">"the carnal knowledge of a female forcibly and against her will. Also includes attempts to commit forcible rape."</span></p>
                            </div>
                            <div>
                                <p className="pt-2 pb-2 pr-2 text-gray-200">robbery <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                                <p className="pb-2 text-gray-400 text-sm">The taking or attempting to take anything of value from the care, custody, or control of 
                                a person or persons by force or the threat of force or violence and/or by putting the victim in fear.</p>
                            </div>
                            <div>
                                <p className="pt-2 pb-2 pr-2 text-gray-200">aggravated_assault <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                                <p className="pb-2 text-gray-400 text-sm">An unlawful attack by one person upon another for the purpose of
                                inflicting severe or aggravated bodily injury. This type of assault usually is accompanied by the use
                                of a weapon or by means likely to produce death or great bodily harm.</p>
                            </div>
                            <div>
                                <p className="pt-2 pb-2 pr-2 text-gray-200">property_crime <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                                <p className="pb-2 text-gray-400 text-sm">Total number of property crimes reported including burglary, theft, motor vehicle theft, and arson.</p>
                            </div>
                            <div>
                                <p className="pt-2 pb-2 pr-2 text-gray-200">burglary <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                                <p className="pb-2 text-gray-400 text-sm">The unlawful entry, or attempted entry, of a structure to commit a felony or a theft.</p>
                            </div>
                            <div>
                                <p className="pt-2 pb-2 pr-2 text-gray-200">larceny <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                                <p className="pb-2 text-gray-400 text-sm">The unlawful taking, carrying, leading, or riding away of property from the possession or constructive possession of another.</p>
                            </div>
                            <div>
                                <p className="pt-2 pb-2 pr-2 text-gray-200">motor_vehicle_theft <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                                <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                            </div>

                        </div>
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <div className="text-sm">
                            <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" >State Schema</p>
                            <code>                                
                                <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">
                                    <pre>{JSON.stringify(exampleStatesSchema,null, 2)}</pre>
                                </p>
                            </code>                        
                        </div>
                        <div className="text-sm pt-16">
                            <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" >Total Schema</p>
                            <code>                                
                                <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">
                                    <pre>{JSON.stringify(exampleTotalsSchema,null, 2)}</pre>
                                </p>
                            </code>                        
                        </div>
                    </div>   
                </div>
                <div id="summaryFullData" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl">Get Full Summary Data</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives all objects within the database.</p>

                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                            <div>
                                <p className="pt-2 pb-2 pr-2 text-gray-200">limit<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                                <p className=" pb-2 text-gray-400 text-sm">A limit on the number of objects to be returned. Limit can range between 1 and no limit, and the default 
                                is the entire collection.</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">An array of objects with crime data between 1979-2019 by state. </p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <ApiCard endpoint="/"></ApiCard>
                        <ResponseCard response={JSON.stringify(exampleTotalsSchema,null, 2)}></ResponseCard>
                    </div>   
                </div>
                <div id="summaryGetYearsList" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-full md:w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">Get List of Years</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of years that the summary reporting system has data for. The years this endpoint 
                        returns are 1979-2019.</p>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">No parameters.</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">An array of years as integer between 1979-2019. </p>
                            </div>
                        </div>                    
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <ApiCard endpoint="/years"></ApiCard>
                        <ResponseCard response="[1979,1980...2018,2019]"></ResponseCard>
                    </div>   
                </div>
                <div id="summaryGetSpecificYear" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-full md:w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">Get Specific Years</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of objects detailing the crimes estimated for each state 
                        from the year requested. The years this endpoint will return are 1979-2019. Any other year will return an empty object.</p>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">No parameters.</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">An array of objects detailing the estimated crimes committed for each state 
                                in the year requested. The length will be 50 for the 50 states within the United States.</p>
                            </div>
                        </div>                    
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <ApiCard endpoint="/years/:year"></ApiCard>
                    </div>   
                </div>
                <div id="summaryGetYearRange" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-full md:w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">Get Range of Years</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of objects detailing the crimes estimated by the Summary Reporting System for each state 
                        from the range of years requested. The range of years this endpoint will return are between 1979-2019. Any other year will return an empty object. The years passed 
                        for the variables yearstart and yearend are inclusive.</p>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">No parameters.</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">An array of objects detailing the estimated crimes committed for each state in the range of years requested.</p>
                            </div>
                        </div>                    
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <ApiCard endpoint="/years/:yearstart/:yearend"></ApiCard>
                    </div>   
                </div>
                <div id="summaryGetYearTotals" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-full md:w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">Get Year Totals</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of objects detailing the total crimes estimated by the Summary Reporting System in the United 
                        States for years between 1979-2019. The range of years this endpoint will return are between 1979-2019. </p>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">No parameters.</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">An array of objects detailing the total estimated crimes committed in every year of the dataset.</p>
                            </div>
                        </div>                    
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <ApiCard endpoint="/years-total/"></ApiCard>
                    </div>   
                </div>
                <div id="summaryGetSpecificYearTotals" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-full md:w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">Get Specific Year Totals</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives an object detailing the total crimes estimated by the Summary Reporting System in the United States 
                        for years between 1979-2019. The range of years this endpoint will return are between 1979-2019. Any other year will return an empty object. The year passed for the variables 
                        year will be the only object returned.</p>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">No parameters.</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">One object detailing the total estimated crimes committed in the United States for the year requested.</p>
                            </div>
                        </div>                    
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <ApiCard endpoint="/years-total/:year"></ApiCard>
                    </div>   
                </div>
                <div id="summaryGetYearTotalsRange" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-full md:w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">Get Range of Year Totals</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of objects detailing the total crimes estimated by the Summary Reporting System in the United States 
                        for years between the passed range. The range of years this endpoint will return are between 1979-2019. Any other year will return an empty object. The years passed 
                        for the variables yearstart and yearend are inclusive.</p>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">No parameters.</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">An array of objects detailing the total estimated crimes committed in the United States in the range of years requested.</p>
                            </div>
                        </div>                    
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <ApiCard endpoint="/years-total/:yearstart/:yearend"></ApiCard>
                    </div>   
                </div>
                <div id="summaryGetStates" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-full md:w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">Get List of State Abbreviations</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives an array of state abbreviations in the United States in a 
                        <a className="text-blue-600 hover:text-gray-300" href="https://www.ssa.gov/international/coc-docs/states.html"> two letter format</a>.</p>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">No parameters.</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">An array of abbreviated (U.S.A) states included in the dataset, formatted as two letter strings.</p>
                            </div>                    
                        </div>
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <ApiCard endpoint="/states"></ApiCard>

                    </div>   
                </div>
                <div id="summaryGetStatesById" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-full md:w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">Get a Specific State</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of objects detailing the crimes estimated for each year 
                        from the state requested. The years this endpoint will return are 1979-2019. An abbreviated statename must be passed or response will be empty or include an error.</p>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">No parameters.</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">An array of objects detailing the estimated crimes commited for each year 
                                in the state requested.</p>
                            </div>
                        </div>                    
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <ApiCard endpoint="/states/:id"></ApiCard>

                    </div>   
                </div>
                <div id="summaryGetStatesList" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-full md:w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">Get List of States Full</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives an array of states in the United States with 
                        <a className="text-blue-600 hover:text-gray-300" href="https://www.ssa.gov/international/coc-docs/states.html"> full names </a>.</p>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">No parameters.</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">An array of all (U.S.A) states included in the dataset, formatted as strings.</p>
                            </div>                    
                        </div>
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <ApiCard endpoint="/states-list"></ApiCard>

                    </div>   
                </div>
                <div id="summaryGetCrimes" className="flex flex-row w-full pt-12 pb-6">
                    <div className="container w-full md:w-1/2 p-4 pt-4">
                        <h1 className="text-gray-100 text-3xl">Get List of Crimes</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives an array of crimes tracked within the Summary Reporting System in the United States.
                        Each crime is estimated for each year between 1979-2019 on a state and national level.</p>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">No parameters.</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-400">                       
                            <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                            <div>
                                <p className="pt-2 pb-2 text-gray-400 text-sm">An array of crimes included in the dataset, formatted as strings.</p>
                            </div>                    
                        </div>
                    </div>
                    <div className="hidden md:block container w-1/2 p-4">
                        <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                        <ApiCard endpoint="/crimes"></ApiCard>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default App;