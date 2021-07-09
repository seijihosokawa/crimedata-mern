import React from "react";
import ApiCard from './Apicard.js';
import ResponseCard from './ResponseCard.js';
import ObjectAttribute from "./ObjectAttribute.js";


function DrugArrestsApiDocs() {
    let exampleDrugArrestsSchema = {"year":1994,"total_arrests":1121002,"total_manufacture":284898,"opioid_manufacture":178318,"marijuana_manufacture":61448,"synthetic_manufacture":5672,"other_manufacture":38658,"total_possess":782761,"opioid_possess":321740,"marijuana_possess":316501,"synthetic_possess":12811,"other_possess":127051};

    return (
        <div className="divide-y divide-gray-200">
            <div id="drugArrests" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl md:text-4xl font-medium">Drug Arrest Data - Reported Number of Arrests by Crime</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This dataset contains the yearly number of reported drug arrests by participating law enforcement agencies. Note that only agencies that have reported arrests for 12 months of the year are represented in the annual counts that are included in the database. This dataset shows the totals of reported drug arrests for the United States from 1994–2016.</p>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">The purpose of this endpoint is to give an overall summary of the number of drug arrests each year.</p>

                    <ul className="pt-6 pb-2 pr-2 text-gray-200">
                        <li> - Data Type: National Drug Arrest Data</li>
                        <li> - Years: 1994-2016</li>
                        <li> - Last Modified: January 1, 2017</li>
                    </ul>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <div className="text-sm rounded border border-gray-500">
                        <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > BASE URL</p>
                        <code>
                            <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">https://crimedata-mern.herokuapp.com/v1/drug-arrests</p>
                        </code>
                    </div>
                    <div className="text-sm rounded border border-gray-500 mt-4">
                        <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > ENDPOINTS</p>
                        <code>
                            <p className="pl-4 pb-1 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /</p>
                            <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /years</p>
                            <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /years/:year</p>
                            <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /years/:yearstart/:yearend</p>                            
                            <p className="pl-4 pb-2 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /offenses</p>
                        </code>
                    </div>
                </div>
            </div>
            <div id="drugArrestsObject" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">The Drug Arrests Object</h1>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Attributes</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">_id <span className="pl-2 text-gray-400 text-sm">string</span></p>
                            <p className="pb-2 text-gray-400 text-sm">MongoDB Object Id (Removed from response)</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">year <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The year the JSON response data is estimated of. The year range for this endpoint is between 1995 and 2016.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">total_arrests <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The total number of arrests in the United States of that year.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">total_manufacture <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The total arrests for drug abuse violations for the sale or manufacturing of a controlled substance.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">opioid_manufacture <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The total arrests for the sale or manufacturing of heroin or cocaine and their derivatives.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">marijuana_manufacture <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The total arrests for the sale or manufacturing of marijuana.</p>
                        </div>
                        <div>
                            <p className="pt-6 pb-2 pr-2 text-blue-200">More Attributes</p>
                        </div>
                        <ObjectAttribute name="synthetic_manufacture" type="integer" definition="The total arrests for the sale or manufacturing of synthetic or manufactured drugs."></ObjectAttribute>
                        <ObjectAttribute name="other_manufacture" type="integer" definition="The total arrests for the sale or manufacturing of other dangerous nonnarcotic drugs."></ObjectAttribute>
                        <ObjectAttribute name="total_possess" type="integer" definition="The total arrests for drug abuse violations for the possession of a controlled substance."></ObjectAttribute>
                        <ObjectAttribute name="opioid_possess" type="integer" definition="The total arrests for the possession of heroin or cocaine and their derivatives."></ObjectAttribute>
                        <ObjectAttribute name="marijuana_possess" type="integer" definition="The total arrests for the possession of marijuana."></ObjectAttribute>
                        <ObjectAttribute name="synthetic_possess" type="integer" definition="The total arrests for the possession of synthetic or manufactured drugs."></ObjectAttribute>
                        <ObjectAttribute name="other_possess" type="integer" definition="The total arrests for the possession of other dangerous nonnarcotic drugs."></ObjectAttribute>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <div className="text-sm rounded border border-gray-500">
                        <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" >Drug Arrests Schema</p>
                        <code>
                            <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm overflow-x-auto">
                                <pre>{JSON.stringify(exampleDrugArrestsSchema, null, 2)}</pre>
                            </p>
                        </code>
                    </div>
                </div>
            </div>
            <div id="drugArrestsFullData" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Full Drug Arrests Data</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives all objects within the drug arrests dataset.</p>

                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">limit<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A limit on the number of objects to be returned. Limit can range between 1 and no limit, and the default
                                is the entire collection. This parameter can be used as <code className="text-gray-300 text-xs">limit=10</code></p>

                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at Arrests Object Schema for possible fields. 
                            User can request more than one field by seperating each fields with a comma. This parameter can be used as <code className="text-gray-300 text-xs">fields=opioid_manufacture,synthetic_manufacture</code></p>
                        </div>

                    </div>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                        <div>
                            <p className="pt-2 pb-2 text-gray-400 text-sm">An array of objects with national arrests data between 1995-2016. </p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <ApiCard endpoint="drug-arrests/"></ApiCard>
                    <ResponseCard response={[{"year":1994,"total_arrests":1121002,"total_manufacture":284898,"opioid_manufacture":178318,"marijuana_manufacture":61448,"synthetic_manufacture":5672,"other_manufacture":38658,"total_possess":782761,"opioid_possess":321740,"marijuana_possess":316501,"synthetic_possess":12811,"other_possess":127051},"..."]}></ResponseCard>
                </div>
            </div>
            <div id="drugArrestsGetYearsList" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get List of Years</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of years that the National Arrest Data has data for. The years this endpoint
                        returns are 1995-2016.</p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 text-gray-400 text-sm">No parameters.</p>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                        <div>
                            <p className="pt-2 pb-2 text-gray-400 text-sm">An array of years as integer between 1995-2016. </p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <ApiCard endpoint="drug-arrests/years"></ApiCard>
                    <ResponseCard response={[1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]}></ResponseCard>
                </div>
            </div>
            <div id="drugArrestsGetSpecificYear" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Specific Year</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives an object detailing the amount of national arrrests by each offense
                        from the year requested. The years this endpoint will return are 1995-2016. Any other year will return an error.</p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at Arrests Object Schema for possible fields. 
                            User can request more than one field by seperating each fields with a comma. This parameter can be used as <code className="text-gray-300 text-xs">fields=opioid_manufacture,synthetic_manufacture</code></p>
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
                    <ApiCard endpoint="drug-arrests/years/:year"></ApiCard>
                    <ResponseCard response={[{"year":2008,"total_arrests":1340654,"total_manufacture":228058,"opioid_manufacture":98333,"marijuana_manufacture":71418,"synthetic_manufacture":19505,"other_manufacture":38803,"total_possess":1058663,"opioid_possess":256290,"marijuana_possess":572682,"synthetic_possess":43683,"other_possess":186014}]}></ResponseCard>
                </div>
            </div>
            <div id="drugArrestsGetYearRange" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Range of Years</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of objects detailing the crimes estimated by the arrests Reporting System for each state
                        from the range of years requested. The range of years this endpoint will return are between 1979-2019. Any other year will return an error. The years passed
                        for the variables yearstart and yearend are inclusive.</p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at arrests Object Schema for possible fields. 
                            User can request more than one field by seperating each fields with a comma. This parameter can be used as <code className="text-gray-300 text-xs">fields=opioid_manufacture,synthetic_manufacture</code></p>
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
                    <ApiCard endpoint="drug-arrests/years/:yearstart/:yearend"></ApiCard>
                    <ResponseCard response={[{"year":1999,"total_arrests":1220464,"total_manufacture":246986,"opioid_manufacture":136960,"marijuana_manufacture":66108,"synthetic_manufacture":12345,"other_manufacture":31480,"total_possess":893208,"opioid_possess":278052,"marijuana_possess":462849,"synthetic_possess":20260,"other_possess":132007},"...",{"year":2002,"total_arrests":1190902,"total_manufacture":218961,"opioid_manufacture":107225,"marijuana_manufacture":59606,"synthetic_manufacture":15376,"other_manufacture":36718,"total_possess":894215,"opioid_possess":249694,"marijuana_possess":441313,"synthetic_possess":32267,"other_possess":170878}]}></ResponseCard>
                </div>
            </div>
            <div id="drugArrestsGetOffenses" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get List of Drug Offenses</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives an array of offenses cataloged within the National Arrest Data in the United States.</p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 text-gray-400 text-sm">No parameters.</p>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                        <div>
                            <p className="pt-2 pb-2 text-gray-400 text-sm">An array of offenses included in the dataset, formatted as strings.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <ApiCard endpoint="drug-arrests/offenses"></ApiCard>
                    <ResponseCard response={["total_arrests","total_manufacture","opioid_manufacture","marijuana_manufacture","synthetic_manufacture","other_manufacture","total_possess","opioid_possess","marijuana_possess","synthetic_possess","other_possess"]}></ResponseCard>
                </div>
            </div>
        </div>
    );
}
export default DrugArrestsApiDocs;