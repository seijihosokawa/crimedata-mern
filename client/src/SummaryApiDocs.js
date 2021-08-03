import React from "react";
import ApiCard from './Apicard.js';
import ResponseCard from './ResponseCard.js';
import ObjectAttribute from "./ObjectAttribute.js";


function SummaryApiDocs() {
    let exampleStatesSchema = { "year": 1979, "state_abbr": "FL", "state_name": "Florida", "population": 8860000, "violent_crime": 73881, "homicide": 1084, "rape": 4576, "robbery": 22097, "aggravated_assault": 46124, "property_crime": 607281, "burglary": 190884, "larceny": 378099, "motor_vehicle_theft": 38298 };
    let exampleTotalsSchema = { "year": 1979, "population": 220099000, "violent_crime": 1208030, "homicide": 21460, "rape": 76390, "robbery": 480700, "aggravated_assault": 629480, "property_crime": 11041500, "burglary": 3327700, "larceny": 6601000, "motor_vehicle_theft": 1112800 }

    return (
        <div className="divide-y divide-gray-200 text-sm md:text-base">
            <div id="summary" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl md:text-4xl font-medium">Summary Reporting System</h1>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">This dataset contains estimated data at the state and national level and was derived from the
                            Summary Reporting System (SRS). These data reflect the estimates the FBI has traditionally included in its annual publications.</p>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">The purpose of this endpoint is to give an overall summary of the FBI's estimated crime totals for the nation and all 50 states, between 1979 to 2019.</p>
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Here are the Summary Reporting System<a className="text-blue-600 hover:text-gray-300" href="https://ofm.wa.gov/sites/default/files/public/legacy/sac/pdf/srs/srs_dictionary.pdf"> Data Definitions</a>.</p>
                        <ul className="pt-6 pb-2 pr-2 text-gray-200">
                            <li> - Data Type: Estimated Crimes</li>
                            <li> - Years: 1979-2019</li>
                            <li> - Last Modified: August 25, 2020</li>
                        </ul>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <div className="text-sm rounded border border-gray-500">
                        <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > BASE URL</p>
                        <code>
                            <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">https://crimedata-mern.herokuapp.com/v1/summary</p>
                        </code>
                    </div>
                    <div className="text-sm rounded border border-gray-500 mt-4">
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
                            <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /states/:id/:year</p>
                            <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /states/:id/:yearstart/:yearend</p>
                            <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /states-list</p>
                            <p className="pl-4 pb-2 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /crimes</p>
                        </code>
                    </div>
                </div>
            </div>
            <div id="summaryObject" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">The Summary Object</h1>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Attributes</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">_id <span className="pl-2 text-gray-400 text-sm">string</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">MongoDB Object Id (Removed from response)</p>
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
                            <p className="pt-6 pb-2 pr-2 text-blue-200">More Attributes</p>
                        </div>
                        <ObjectAttribute name="aggravated_assault" type="integer" definition="An unlawful attack by one person upon another for the purpose of
                                inflicting severe or aggravated bodily injury. This type of assault usually is accompanied by the use
                                of a weapon or by means likely to produce death or great bodily harm."></ObjectAttribute>
                        <ObjectAttribute name="property_crime" type="integer" definition="Total number of property crimes reported including burglary, theft, motor vehicle theft, and arson."></ObjectAttribute>
                        <ObjectAttribute name="burglary" type="integer" definition="The unlawful entry, or attempted entry, of a structure to commit a felony or a theft."></ObjectAttribute>
                        <ObjectAttribute name="larceny" type="integer" definition="The unlawful taking, carrying, leading, or riding away of property from the possession or constructive possession of another."></ObjectAttribute>
                        <ObjectAttribute name="motor_vehicle_theft" type="integer" definition="The theft or attempted theft of a motor vehicle."></ObjectAttribute>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <div className="text-sm rounded border border-gray-500">
                        <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" >State Schema</p>
                        <code>
                            <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm overflow-x-auto">
                                <pre>{JSON.stringify(exampleStatesSchema, null, 2)}</pre>
                            </p>
                        </code>
                    </div>
                    <div className="text-sm rounded border border-gray-500 mt-16">
                        <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" >Total Schema</p>
                        <code>
                            <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm overflow-x-auto">
                                <pre>{JSON.stringify(exampleTotalsSchema, null, 2)}</pre>
                            </p>
                        </code>
                    </div>
                </div>
            </div>
            <div id="summaryFullData" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Full Summary Data</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives all objects within the database.</p>

                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">limit<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A limit on the number of objects to be returned. Limit can range between 1 and no limit, and the default
                                is the entire collection. This parameter can be used as <code className="text-gray-300 text-xs">limit=10</code></p>

                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at Summary Object Schema for possible fields. 
                            User can request more than one field by seperating each fields with a comma. This parameter can be used as <code className="text-gray-300 text-xs">fields=larceny,homicide,violent_crime</code></p>
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
                    <ApiCard endpoint="summary/"></ApiCard>
                    <ResponseCard response={[{"year":1979,"state_abbr":"AK","state_name":"Alaska","population":406000,"violent_crime":1994,"homicide":54,"rape":292,"robbery":445,"aggravated_assault":1203,"property_crime":23193,"burglary":5616,"larceny":15076,"motor_vehicle_theft":2501},{"year":1979,"state_abbr":"AL","state_name":"Alabama","population":3769000,"violent_crime":15578,"homicide":496,"rape":1037,"robbery":4127,"aggravated_assault":9918,"property_crime":144372,"burglary":48517,"larceny":83791,"motor_vehicle_theft":12064},"..."]}></ResponseCard>
                </div>
            </div>
            <div id="summaryGetYearsList" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get List of Years</h1>
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
                    <ApiCard endpoint="summary/years"></ApiCard>
                    <ResponseCard response={[1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019]}></ResponseCard>
                </div>
            </div>
            <div id="summaryGetSpecificYear" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Specific Years</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of objects detailing the crimes estimated for each state
                        from the year requested. The years this endpoint will return are 1979-2019. Any other year will return an error.</p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at Summary Object Schema for possible fields. 
                            User can request more than one field by seperating each fields with a comma. This parameter can be used as <code className="text-gray-300 text-xs">fields=larceny,homicide,violent_crime</code></p>
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
                    <ApiCard endpoint="summary/years/:year"></ApiCard>
                    <ResponseCard response={[{"year":2001,"state_abbr":"AK","state_name":"Alaska","population":633630,"violent_crime":3735,"homicide":39,"rape":501,"robbery":514,"aggravated_assault":2681,"property_crime":23160,"burglary":3847,"larceny":16695,"motor_vehicle_theft":2618},{"year":2001,"state_abbr":"AL","state_name":"Alabama","population":4468912,"violent_crime":19582,"homicide":379,"rape":1369,"robbery":5584,"aggravated_assault":12250,"property_crime":173253,"burglary":40642,"larceny":119992,"motor_vehicle_theft":12619},"..."]}></ResponseCard>
                </div>
            </div>
            <div id="summaryGetYearRange" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Range of Years</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of objects detailing the crimes estimated by the Summary Reporting System for each state
                        from the range of years requested. The range of years this endpoint will return are between 1979-2019. Any other year will return an error. The years passed
                        for the variables yearstart and yearend are inclusive.</p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at Summary Object Schema for possible fields. 
                            User can request more than one field by seperating each fields with a comma. This parameter can be used as <code className="text-gray-300 text-xs">fields=larceny,homicide,violent_crime</code></p>
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
                    <ApiCard endpoint="summary/years/:yearstart/:yearend"></ApiCard>
                    <ResponseCard response={[{"year":1979,"state_abbr":"AK","state_name":"Alaska","population":406000,"violent_crime":1994,"homicide":54,"rape":292,"robbery":445,"aggravated_assault":1203,"property_crime":23193,"burglary":5616,"larceny":15076,"motor_vehicle_theft":2501},"...",{"year":2001,"state_abbr":"AL","state_name":"Alabama","population":3769000,"violent_crime":15578,"homicide":496,"rape":1037,"robbery":4127,"aggravated_assault":9918,"property_crime":144372,"burglary":48517,"larceny":83791,"motor_vehicle_theft":12064}]}></ResponseCard>
                </div>
            </div>
            <div id="summaryGetYearTotals" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Year Totals</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of objects detailing the total crimes estimated by the Summary Reporting System in the United
                        States for years between 1979-2019. The range of years this endpoint will return are between 1979-2019. </p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">limit<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A limit on the number of objects to be returned. Limit can range between 1 and no limit, and the default
                                is the entire collection. This parameter can be used as <code className="text-gray-300 text-xs">limit=10</code></p>

                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at Summary Object Schema for possible fields. 
                            User can request more than one field by seperating each fields with a comma. This parameter can be used as <code className="text-gray-300 text-xs">fields=larceny,homicide,violent_crime</code></p>
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
                    <ApiCard endpoint="summary/years-total/"></ApiCard>
                    <ResponseCard response={[{"year":1979,"population":220099000,"violent_crime":1208030,"homicide":21460,"rape":76390,"robbery":480700,"aggravated_assault":629480,"property_crime":11041500,"burglary":3327700,"larceny":6601000,"motor_vehicle_theft":1112800},"...",{"year":2002,"population":287973924,"violent_crime":1423677,"homicide":16229,"rape":95235,"robbery":420806,"aggravated_assault":891407,"property_crime":10455277,"burglary":2151252,"larceny":7057379,"motor_vehicle_theft":1246646}]}></ResponseCard>
                </div>
            </div>
            <div id="summaryGetSpecificYearTotals" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Specific Year Totals</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives an object detailing the total crimes estimated by the Summary Reporting System in the United States
                        for years between 1979-2019. The range of years this endpoint will return are between 1979-2019. Any other year will return an empty object. The year passed for the variables
                        year will be the only object returned.</p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at Summary Object Schema for possible fields. 
                            User can request more than one field by seperating each fields with a comma. This parameter can be used as <code className="text-gray-300 text-xs">fields=larceny,homicide,violent_crime</code></p>
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
                    <ApiCard endpoint="summary/years-total/:year"></ApiCard>
                    <ResponseCard response={[{"year":2018,"population":326687501,"violent_crime":1252399,"homicide":16374,"rape":143765,"robbery":281278,"aggravated_assault":810982,"property_crime":7219084,"burglary":1235013,"larceny":5232167,"motor_vehicle_theft":751904}]}></ResponseCard>
                </div>
            </div>
            <div id="summaryGetYearTotalsRange" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Range of Year Totals</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of objects detailing the total crimes estimated by the Summary Reporting System in the United States
                        for years between the passed range. The range of years this endpoint will return are between 1979-2019. Any other year will return an empty object. The years passed
                        for the variables yearstart and yearend are inclusive.</p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at Summary Object Schema for possible fields. 
                            User can request more than one field by seperating each fields with a comma. This parameter can be used as <code className="text-gray-300 text-xs">fields=larceny,homicide,violent_crime</code></p>
                        </div>                    </div>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                        <div>
                            <p className="pt-2 pb-2 text-gray-400 text-sm">An array of objects detailing the total estimated crimes committed in the United States in the range of years requested.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <ApiCard endpoint="summary/years-total/:yearstart/:yearend"></ApiCard>
                    <ResponseCard response={[{"year":1992,"population":255029699,"violent_crime":1932274,"homicide":23760,"rape":109062,"robbery":672478,"aggravated_assault":1126974,"property_crime":12505917,"burglary":2979884,"larceny":7915199,"motor_vehicle_theft":1610834},{"year":1993,"population":257782608,"violent_crime":1926017,"homicide":24526,"rape":106014,"robbery":659870,"aggravated_assault":1135607,"property_crime":12218777,"burglary":2834808,"larceny":7820909,"motor_vehicle_theft":1563060},{"year":1994,"population":260327021,"violent_crime":1857670,"homicide":23326,"rape":102216,"robbery":618949,"aggravated_assault":1113179,"property_crime":12131873,"burglary":2712774,"larceny":7879812,"motor_vehicle_theft":1539287}]}></ResponseCard>
                </div>
            </div>
            <div id="summaryGetStates" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get List of State Abbreviations</h1>
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
                    <ApiCard endpoint="summary/states"></ApiCard>
                    <ResponseCard response={["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA","VT","WA","WI","WV","WY"]}></ResponseCard>

                </div>
            </div>
            <div id="summaryGetStatesById" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get a Specific State</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of objects detailing the crimes estimated for each year
                        from the state requested. The years this endpoint will return are 1979-2019. An abbreviated statename must be passed or response will be empty or include an error.</p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">limit<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A limit on the number of objects to be returned. Limit can range between 1 and no limit, and the default
                                is the entire collection. This parameter can be used as <code className="text-gray-300 text-xs">limit=10</code></p>

                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at Summary Object Schema for possible fields. 
                            User can request more than one field by seperating each fields with a comma. This parameter can be used as <code className="text-gray-300 text-xs">fields=larceny,homicide,violent_crime</code></p>
                        </div>                    </div>
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
                    <ApiCard endpoint="summary/states/:id"></ApiCard>
                    <ResponseCard response={[{"year":1979,"state_abbr":"CT","state_name":"Connecticut","population":3115000,"violent_crime":12902,"homicide":131,"rape":752,"robbery":6021,"aggravated_assault":5998,"property_crime":167131,"burglary":48229,"larceny":96997,"motor_vehicle_theft":21905},{"year":1980,"state_abbr":"CT","state_name":"Connecticut","population":3095224,"violent_crime":12768,"homicide":146,"rape":670,"robbery":6749,"aggravated_assault":5203,"property_crime":169283,"burglary":52638,"larceny":95631,"motor_vehicle_theft":21014},"..."]}></ResponseCard>

                </div>
            </div>
            <div id="summaryGetStatesYear" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get a Specific State Year</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of objects detailing the crimes estimated for each year
                        from the state requested. The years this endpoint will return are 1979-2019. An abbreviated statename must be passed or response will be empty or include an error.</p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at Summary Object Schema for possible fields. 
                            User can request more than one field by seperating each fields with a comma. This parameter can be used as <code className="text-gray-300 text-xs">fields=larceny,homicide,violent_crime</code></p>
                        </div>                    </div>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                        <div>
                            <p className="pt-2 pb-2 text-gray-400 text-sm">An array of objects detailing the estimated crimes commited for the requested year
                                in the state requested.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <ApiCard endpoint="summary/states/:id/:year"></ApiCard>
                    <ResponseCard response={[{"year":1979,"state_abbr":"CT","state_name":"Connecticut","population":3115000,"violent_crime":12902,"homicide":131,"rape":752,"robbery":6021,"aggravated_assault":5998,"property_crime":167131,"burglary":48229,"larceny":96997,"motor_vehicle_theft":21905}]}></ResponseCard>

                </div>
            </div>
            <div id="summaryGetStatesYearRange" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get a Specific State's Range of Years</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of objects detailing the crimes estimated for each year
                        from the state requested. The years this endpoint will return are 1979-2019. An abbreviated statename must be passed or response will be empty or include an error.</p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at Summary Object Schema for possible fields. 
                            User can request more than one field by seperating each fields with a comma. This parameter can be used as <code className="text-gray-300 text-xs">fields=larceny,homicide,violent_crime</code></p>
                        </div>                    </div>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                        <div>
                            <p className="pt-2 pb-2 text-gray-400 text-sm">An array of objects detailing the estimated crimes commited for the state requested in the year range give.
                            The yearstart and yearend are inclusive.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <ApiCard endpoint="summary/states/:id/:yearstart/:yearend"></ApiCard>
                    <ResponseCard response={[{"year":1979,"state_abbr":"CT","state_name":"Connecticut","population":3115000,"violent_crime":12902,"homicide":131,"rape":752,"robbery":6021,"aggravated_assault":5998,"property_crime":167131,"burglary":48229,"larceny":96997,"motor_vehicle_theft":21905},{"year":1980,"state_abbr":"CT","state_name":"Connecticut","population":3095224,"violent_crime":12768,"homicide":146,"rape":670,"robbery":6749,"aggravated_assault":5203,"property_crime":169283,"burglary":52638,"larceny":95631,"motor_vehicle_theft":21014},"..."]}></ResponseCard>

                </div>
            </div>
            <div id="summaryGetStatesList" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get List of States Full</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives an array of states (alphabetical order) in the United States with
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
                    <ApiCard endpoint="summary/states-list"></ApiCard>
                    <ResponseCard response={["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}></ResponseCard>
                </div>
            </div>
            <div id="summaryGetCrimes" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get List of Crimes</h1>
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
                    <ApiCard endpoint="summary/crimes"></ApiCard>
                    <ResponseCard response={["violent_crime","homicide","rape","robbery","aggravated_assault","property_crime","burglary","larceny","motor_vehicle_theft"]}></ResponseCard>
                </div>
            </div>
        </div>
    );
}
export default SummaryApiDocs;