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
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This dataset contains the yearly number of reported arrests for various offenses reported by participating law enforcement agencies. The arrests are by offense and broken down by age and sex or age and race. Not all agencies report race and/or ethnicity for arrests but they must report age and sex. Note that only agencies that have reported arrests for 12 months of the year are represented in the annual counts that are included in the database. This dataset shows the totals of reported arrests for the nation from 1995–2016.</p>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">The purpose of this endpoint is to give an overall summary of the number of arrests each year.</p>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">Here are the National Arrest data<a className="text-blue-600 hover:text-gray-300 pl-1" href="https://www.bjs.gov/arrests/templates/terms.cfm">definitions</a>.</p>

                    <ul className="pt-6 pb-2 pr-2 text-gray-200">
                        <li> - Data Type: National Arrest Data</li>
                        <li> - Years: 1995-2016</li>
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
                            <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /offenses</p>
                        </code>
                    </div>
                </div>
            </div>
            <div id="drugArrestsObject" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">The Arrests Object</h1>
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
                            <p className="pb-2 text-gray-400 text-sm">The willful killing of one person by another or the killing of another person through gross negligence.
                                Also includes the non-violent offense of Controlled Substance Homicide.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">opioid_manufacture <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The definition of rape changed on <a className="text-blue-600 hover:text-gray-300" href="https://www.justice.gov/archives/opa/blog/updated-definition-rape">January 6, 2012 </a>
                                to <span className="italic">"the penetration, no matter how slight, of the vagina or anus with any body part or object, or oral penetration by a sex organ of another person, without the consent of the victim." </span>
                                The old definition of rape (before 2012): <span className="italic">"the carnal knowledge of a female forcibly and against her will. Also includes attempts to commit forcible rape."</span></p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">marijuana_manufacture <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The taking or attempting to take anything of value from the care, custody, or control of
                                a person or persons by force or the threat of force or violence and/or by putting the victim in fear.</p>
                        </div>
                        <div>
                            <p className="pt-6 pb-2 pr-2 text-blue-200">More Attributes</p>
                        </div>
                        <ObjectAttribute name="synthetic_manufacture" type="integer" definition="The theft or attempted theft of a motor vehicle."></ObjectAttribute>
                        <ObjectAttribute name="other_manufacture" type="integer" definition="The theft or attempted theft of a motor vehicle."></ObjectAttribute>
                        <ObjectAttribute name="total_possess" type="integer" definition="Any willful or malicious burning or attempt to burn, with or without intent to defraud, a dwelling house, public building, motor vehicle or aircraft, personal property of another, etc."></ObjectAttribute>
                        <ObjectAttribute name="opioid_possess" type="integer" definition="Includes the offenses of murder and nonnegligent manslaughter, forcible rape, robbery, and aggravated assault. Post-2012, the violent crime index excludes rape arrests."></ObjectAttribute>
                        <ObjectAttribute name="marijuana_possess" type="integer" definition="The theft or attempted theft of a motor vehicle."></ObjectAttribute>
                        <ObjectAttribute name="synthetic_possess" type="integer" definition="Any willful or malicious burning or attempt to burn, with or without intent to defraud, a dwelling house, public building, motor vehicle or aircraft, personal property of another, etc."></ObjectAttribute>
                        <ObjectAttribute name="other_possess" type="integer" definition="Includes the offenses of murder and nonnegligent manslaughter, forcible rape, robbery, and aggravated assault. Post-2012, the violent crime index excludes rape arrests."></ObjectAttribute>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <div className="text-sm rounded border border-gray-500">
                        <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" >Arrests Schema</p>
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
                    <h1 className="text-gray-100 text-3xl font-medium">Get Full Arrests Data</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives all objects within the database.</p>

                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">limit<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A limit on the number of objects to be returned. Limit can range between 1 and no limit, and the default
                                is the entire collection. This parameter can be used as <code className="text-gray-300 text-xs">limit=10</code></p>

                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at Arrests Object Schema for possible fields. 
                            User can request more than one field by seperating each fields with a comma. This parameter can be used as <code className="text-gray-300 text-xs">fields=dui,homicide,burglary</code></p>
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
                    <ResponseCard response={[{"year":1979,"state_abbr":"AK","state_name":"Alaska","population":406000,"violent_crime":1994,"homicide":54,"rape":292,"robbery":445,"aggravated_assault":1203,"property_crime":23193,"burglary":5616,"larceny":15076,"motor_vehicle_theft":2501},{"year":1979,"state_abbr":"AL","state_name":"Alabama","population":3769000,"violent_crime":15578,"homicide":496,"rape":1037,"robbery":4127,"aggravated_assault":9918,"property_crime":144372,"burglary":48517,"larceny":83791,"motor_vehicle_theft":12064},"..."]}></ResponseCard>
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
                    <ResponseCard response={[1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]}></ResponseCard>
                </div>
            </div>
            <div id="drugArrestsGetSpecificYear" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Specific Year</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives an object detailing the amount of national arrrests by each offense
                        from the year requested. The years this endpoint will return are 1995-2016. Any other year will return an empty object.</p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at Arrests Object Schema for possible fields. 
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
                    <ApiCard endpoint="drug-arrests/years/:year"></ApiCard>
                    <ResponseCard response={[{"year":2014,"population":318907401,"total_arrests":11205833,"homicide":10571,"rape":21007,"robbery":94403,"aggravated_assault":372685,"burglary":237974,"larceny":1238190,"motor_vehicle_theft":68422,"arson":9394,"violent_crime":498666,"property_crime":1553980,"other_assault":1093258,"forgery":56783,"fraud":141293,"embezzlement":16227,"stolen_property":88946,"vandalism":198400,"weapons":140713,"prostitution":47598,"other_sex_offenses":55456,"drug_abuse":1561231,"gambling":5637,"against_family":102336,"dui":1117852,"liquor_laws":321125,"drunkenness":414854,"disorderly_conduct":436014,"vagrancy":27380,"other":3274430,"suspicion":1310,"curfew_loitering":53654}]}></ResponseCard>
                </div>
            </div>
            <div id="drugArrestsGetYearRange" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Range of Years</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives a list of objects detailing the crimes estimated by the arrests Reporting System for each state
                        from the range of years requested. The range of years this endpoint will return are between 1979-2019. Any other year will return an empty object. The years passed
                        for the variables yearstart and yearend are inclusive.</p>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Parameters</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">fields<span className="pl-2 text-gray-400 text-sm">optional</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">A query parameter that will only return the requested field. Look at arrests Object Schema for possible fields. 
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
                    <ApiCard endpoint="drug-arrests/years/:yearstart/:yearend"></ApiCard>
                    <ResponseCard response={[{"year":2003,"population":290788976,"total_arrests":13639479,"homicide":13190,"rape":26350,"robbery":107553,"aggravated_assault":449933,"burglary":290956,"larceny":1145074,"motor_vehicle_theft":152934,"arson":16163,"violent_crime":597026,"property_crime":1605127,"other_assault":1246698,"forgery":111823,"fraud":299138,"embezzlement":16826,"stolen_property":126775,"vandalism":273431,"weapons":167972,"prostitution":75190,"other_sex_offenses":91546,"drug_abuse":1678192,"gambling":10954,"against_family":136034,"dui":1448148,"liquor_laws":612079,"drunkenness":548616,"disorderly_conduct":639371,"vagrancy":28948,"other":3665543,"suspicion":7163,"curfew_loitering":136461},"...",{"year":2005,"population":296507061,"total_arrests":14094186,"homicide":14062,"rape":25528,"robbery":114616,"aggravated_assault":449297,"burglary":298835,"larceny":1146696,"motor_vehicle_theft":147459,"arson":16337,"violent_crime":603503,"property_crime":1609327,"other_assault":1301392,"forgery":118455,"fraud":321521,"embezzlement":18970,"stolen_property":133856,"vandalism":279562,"weapons":193469,"prostitution":84891,"other_sex_offenses":91625,"drug_abuse":1846351,"gambling":11180,"against_family":129128,"dui":1371919,"liquor_laws":597838,"drunkenness":556167,"disorderly_conduct":678231,"vagrancy":33227,"other":3863785,"suspicion":3764,"curfew_loitering":140835}]}></ResponseCard>
                </div>
            </div>
            <div id="drugArrestsGetOffenses" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get List of Offenses</h1>
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
                    <ResponseCard response={["homicide","rape","robbery","aggravated_assault","burglary","larceny","motor_vehicle_theft","arson","violent_crime","property_crime","other_assault","forgery","fraud","embezzlement","stolen_property","vandalism","weapons","prostitution","other_sex_offenses","drug_abuse","gambling"]}></ResponseCard>
                </div>
            </div>
        </div>
    );
}
export default DrugArrestsApiDocs;