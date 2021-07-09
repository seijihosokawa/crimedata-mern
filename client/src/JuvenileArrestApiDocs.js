import React from "react";
import ApiCard from './Apicard.js';
import ResponseCard from './ResponseCard.js';
import ObjectAttribute from "./ObjectAttribute.js";


function JuvenileArrestApiDocs() {
    let exampleJuvenileArrestsSchema = {"year":1994,"offense_code":"ARSON","offense_name":"Arson","total_male":8050,"total_female":1133,"m_0_9":1030,"m_10_12":1808,"m_13_14":2618,"m_15":1060,"m_16":846,"m_17":688,"f_0_9":108,"f_10_12":214,"f_13_14":452,"f_15":158,"f_16":107,"f_17":94,"white":7319,"black":1649,"asian_pacific_islander":93,"american_indian":98};

    return (
        <div className="divide-y divide-gray-200">
            <div id="juvenileArrests" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl md:text-4xl font-medium">Juvenile Arrest Data - Reported Number of Arrests by Crime</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This dataset contains the yearly number of reported juvenile arrests by participating law enforcement agencies. Note that only agencies that have reported arrests for 12 months of the year are represented in the annual counts that are included in the database. This dataset shows the totals of juvenilte arrests for the United States from 1994–2016.</p>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">The purpose of this endpoint is to give an overall summary of the number of juvenile arrests each year by offense.</p>

                    <ul className="pt-6 pb-2 pr-2 text-gray-200">
                        <li> - Data Type: National Juvenile Arrest Data</li>
                        <li> - Years: 1994-2016</li>
                        <li> - Last Modified: January 1, 2017</li>
                    </ul>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <div className="text-sm rounded border border-gray-500">
                        <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > BASE URL</p>
                        <code>
                            <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">https://crimedata-mern.herokuapp.com/v1/juvenile-arrests</p>
                        </code>
                    </div>
                    <div className="text-sm rounded border border-gray-500 mt-4">
                        <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > ENDPOINTS</p>
                        <code>
                            <p className="pl-4 pb-1 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /</p>
                            <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /years</p>
                            <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /years/:year</p>
                            <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /years/:yearstart/:yearend</p>                            
                            <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /offenses</p>
                            <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /offense-code</p>
                            <p className="pl-4 pb-2 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /offenses/:offense</p>
                            
                        </code>
                    </div>
                </div>
            </div>
            <div id="juvenileArrestsObject" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">The Juvenile Arrests Object</h1>
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
                            <p className="pt-2 pb-2 pr-2 text-gray-200">offense_code <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The abbreviated offense code for the given offense.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">offense_name <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The full name of the criminal offense.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">total_male <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The total males arrested for the specified offense.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">total_female <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The total females arrested for the specified offense.</p>
                        </div>
                        <div>
                            <p className="pt-6 pb-2 pr-2 text-blue-200">More Attributes</p>
                        </div>
                        <ObjectAttribute name="m_0_9" type="integer" definition="The total males arrested for the specified offense between the ages 0-9."></ObjectAttribute>
                        <ObjectAttribute name="m_10_12" type="integer" definition="The total males arrested for the specified offense between the ages 10-12."></ObjectAttribute>
                        <ObjectAttribute name="m_13_14" type="integer" definition="The total males arrested for the specified offense between the ages 13-14."></ObjectAttribute>
                        <ObjectAttribute name="m_15" type="integer" definition="The total 15 year old males arrested for the specified offense."></ObjectAttribute>
                        <ObjectAttribute name="m_16" type="integer" definition="The total 16 year old males arrested for the specified offense."></ObjectAttribute>
                        <ObjectAttribute name="m_17" type="integer" definition="The total 17 year old males arrested for the specified offense."></ObjectAttribute>
                        <ObjectAttribute name="f_0_9" type="integer" definition="The total females arrested for the specified offense between the ages 0-9."></ObjectAttribute>
                        <ObjectAttribute name="f_10_12" type="integer" definition="The total females arrested for the specified offense between the ages 10-12."></ObjectAttribute>
                        <ObjectAttribute name="f_13_14" type="integer" definition="The total females arrested for the specified offense between the ages 13-14."></ObjectAttribute>
                        <ObjectAttribute name="f_15" type="integer" definition="The total 15 year old females arrested for the specified offense."></ObjectAttribute>
                        <ObjectAttribute name="f_16" type="integer" definition="The total 16 year old females arrested for the specified offense."></ObjectAttribute>
                        <ObjectAttribute name="f_17" type="integer" definition="The total 17 year old females arrested for the specified offense."></ObjectAttribute>
                        <ObjectAttribute name="white" type="integer" definition="The total number of arrests of people belonging to the group/race: White"></ObjectAttribute>
                        <ObjectAttribute name="black" type="integer" definition="The total number of arrests of people belonging to the group/race: Black"></ObjectAttribute>
                        <ObjectAttribute name="asian_pacific_islander" type="integer" definition="The total number of arrests of people belonging to the group/race: Asian/Pacific Islander"></ObjectAttribute>
                        <ObjectAttribute name="american_indian" type="integer" definition="The total number of arrests of people belonging to the group/race: American Indian"></ObjectAttribute>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <div className="text-sm rounded border border-gray-500">
                        <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" >Drug Arrests Schema</p>
                        <code>
                            <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm overflow-x-auto">
                                <pre>{JSON.stringify(exampleJuvenileArrestsSchema, null, 2)}</pre>
                            </p>
                        </code>
                    </div>
                </div>
            </div>
            <div id="juvenileArrestsFullData" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Full Drug Arrests Data</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives all objects within the juvinile arrests dataset.</p>

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
                            <p className="pt-2 pb-2 text-gray-400 text-sm">An array of objects with national juvinile arrests data between 1995-2016. </p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <ApiCard endpoint="juvenile-arrests/"></ApiCard>
                    <ResponseCard response={[{"year":1994,"offense_code":"ARSON","offense_name":"Arson","total_male":8050,"total_female":1133,"m_0_9":1030,"m_10_12":1808,"m_13_14":2618,"m_15":1060,"m_16":846,"m_17":688,"f_0_9":108,"f_10_12":214,"f_13_14":452,"f_15":158,"f_16":107,"f_17":94,"white":7319,"black":1649,"asian_pacific_islander":93,"american_indian":98},"..."]}></ResponseCard>
                </div>
            </div>
            <div id="juvenileArrestsGetYearsList" className="flex flex-row w-full pt-12 pb-6">
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
                    <ApiCard endpoint="juvenile-arrests/years"></ApiCard>
                    <ResponseCard response={[1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]}></ResponseCard>
                </div>
            </div>
            <div id="juvenileArrestsGetSpecificYear" className="flex flex-row w-full pt-12 pb-6">
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
                            <p className="pt-2 pb-2 text-gray-400 text-sm">An array of objects detailing the juvenile arrests by offense in the year requested.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <ApiCard endpoint="juvenile-arrests/years/:year"></ApiCard>
                    <ResponseCard response={[{"year":2007,"offense_code":"ARSON","offense_name":"Arson","total_male":4956,"total_female":662,"m_0_9":338,"m_10_12":930,"m_13_14":1671,"m_15":846,"m_16":628,"m_17":543,"f_0_9":25,"f_10_12":105,"f_13_14":243,"f_15":119,"f_16":107,"f_17":63,"white":4281,"black":1173,"asian_pacific_islander":92,"american_indian":50},"..."]}></ResponseCard>
                </div>
            </div>
            <div id="juvenileArrestsGetYearRange" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Range of Years</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of objects detailing the juviinle arrests for each offense
                        from the range of years requested. The range of years this endpoint will return are between 1994-2016. Any other year will return an error. The years passed
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
                            <p className="pt-2 pb-2 text-gray-400 text-sm">An array of objects detailing the juvenile crimes committed by each offense in the range of years requested.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <ApiCard endpoint="juvenile-arrests/years/:yearstart/:yearend"></ApiCard>
                    <ResponseCard response={[{"year":2001,"offense_code":"ARSON","offense_name":"Arson","total_male":5777,"total_female":749,"m_0_9":651,"m_10_12":1373,"m_13_14":1724,"m_15":826,"m_16":670,"m_17":533,"f_0_9":53,"f_10_12":135,"f_13_14":280,"f_15":112,"f_16":100,"f_17":69,"white":5289,"black":1095,"asian_pacific_islander":64,"american_indian":66},"...",{"year":2005,"offense_code":"WEAP","offense_name":"Weapons","total_male":30772,"total_female":3696,"m_0_9":328,"m_10_12":2442,"m_13_14":7427,"m_15":5890,"m_16":6886,"m_17":7799,"f_0_9":19,"f_10_12":344,"f_13_14":1188,"f_15":832,"f_16":721,"f_17":592,"white":20944,"black":12715,"asian_pacific_islander":420,"american_indian":267}]}></ResponseCard>
                </div>
            </div>
            <div id="juvenileArrestsGetOffenses" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get List of Offenses</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives an array of offenses cataloged within the National Juevnile Arrest Data in the United States.</p>
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
                    <ApiCard endpoint="juvenile-arrests/offenses"></ApiCard>
                    <ResponseCard response={["Aggravated Assault","All Other Offenses","Arson","Burglary","Curfew and Loitering Law Violations","Disorderly Conduct","Drive Under the Influence","Drug Abuse Violations","Drunkenness","Embezzlement","Forgery and Counterfeiting","Fraud","Gambling","Larceny","Liquor Laws","Manslaughter by Negligence","Motor Vehicle Theft","Murder and Nonnegligent Homicide","Offenses Against the Family and Children","Prostitution and Commercialized Vice","Rape","Robbery","Runaway","Sex Offenses","Simple Assault","Stolen Property","Suspicion","Vagrancy","Vandalism","Weapons"]}></ResponseCard>
                </div>
            </div>
            <div id="juvenileArrestsGetOffenseCodes" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get List of Offense Codes</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives an array of offense codes cataloged within the National Juevnile Arrest Data in the United States.</p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 text-gray-400 text-sm">No parameters.</p>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                        <div>
                            <p className="pt-2 pb-2 text-gray-400 text-sm">An array of offense codes included in the dataset, formatted as strings.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <ApiCard endpoint="juvenile-arrests/offense-code"></ApiCard>
                    <ResponseCard response={["ARSON","AST","AST_SMP","BRG","CUR","DIS","DRG","DRK","DUI","EMB","FAM","FOR","FRD","GAM","HOM","LIQ","LRC","MAN","MVT",
                    "OTH","PRS","ROB","RPE","RUN","SEX","STP","SUS","VAG","VAN","WEAP"]}></ResponseCard>
                </div>
            </div>
            <div id="juvenileArrestsGetSpecificOffense" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Specific Offense</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives an array of objects by offense codes cataloged within the National Juevnile Arrest Data in the United States.</p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at arrests Object Schema for possible fields. 
                            User can request more than one field by seperating each fields with a comma. This parameter can be used as <code className="text-gray-300 text-xs">fields=total_female,m_17</code></p>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Returns</p>
                        <div>
                            <p className="pt-2 pb-2 text-gray-400 text-sm">An array of objects detailing juvenile arrests data for the specified arrest.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <ApiCard endpoint="juvenile-arrests/offenses/:offense"></ApiCard>
                    <ResponseCard response={{"year":1994,"offense_code":"FOR","offense_name":"Forgery and Counterfeiting","total_male":4491,"total_female":2566,"m_0_9":23,"m_10_12":131,"m_13_14":429,"m_15":606,"m_16":1353,"m_17":1949,"f_0_9":10,"f_10_12":59,"f_13_14":288,"f_15":380,"f_16":711,"f_17":1118,"white":5611,"black":1268,"asian_pacific_islander":101,"american_indian":69}}></ResponseCard>
                </div>
            </div>
        </div>
    );
}
export default JuvenileArrestApiDocs;