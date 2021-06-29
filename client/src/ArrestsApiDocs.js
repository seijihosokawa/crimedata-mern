import React from "react";
import ApiCard from './Apicard.js';
import ResponseCard from './ResponseCard.js';


function SummaryApiDocs() {
    let exampleArrestsSchema = {"year":2016,"population":323127513,"total_arrests":10662252,"homicide":11788,"rape":23632,"robbery":95754,"aggravated_assault":383977,"burglary":207325,"larceny":1050058,"motor_vehicle_theft":86088,"arson":9812,"violent_crime":515151,"property_crime":1353283,"other_assault":1078808,"forgery":56661,"fraud":128531,"embezzlement":15937,"stolen_property":93981,"vandalism":195951,"weapons":156777,"prostitution":38306,"other_sex_offenses":51063,"drug_abuse":1572579,"gambling":3705,"against_family":88748,"dui":1017808,"liquor_laws":234899,"drunkenness":376433,"disorderly_conduct":369733,"vagrancy":24851,"other":3254871,"suspicion":576,"curfew_loitering":34176};

    return (
        <div className="divide-y divide-gray-200">
            <div id="arrests" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl md:text-4xl font-medium">Arrest Data - Reported Number of Arrests by Crime</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This dataset contains the monthly number of reported arrests for various offenses reported by participating law enforcement agencies. The arrests are by offense and broken down by age and sex or age and race. Not all agencies report race and/or ethnicity for arrests but they must report age and sex. Note that only agencies that have reported arrests for 12 months of the year are represented in the annual counts that are included in the database. Download this dataset to see totals of reported arrests for the nation from 1995–2016.</p>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">The purpose of this endpoint is to give an overall summary of crimes committed by year or state.</p>
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
                            <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">https://crimedata-mern.herokuapp.com/v1/arrests</p>
                        </code>
                    </div>
                    <div className="text-sm rounded border border-gray-500 mt-4">
                        <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" > ENDPOINTS</p>
                        <code>
                            <p className="pl-4 pb-1 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /</p>
                            <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /offenses</p>
                            <p className="pl-4 pb-1 pt-1 rounded-b bg-gray-800 text-gray-300 text-sm"><span className="text-blue-600">GET</span> /:crime</p>
                        </code>
                    </div>
                </div>
            </div>
            <div id="arrestsObject" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">The Arrests Object</h1>
                    <div className="divide-y divide-gray-400">
                        <p className="pt-6 pb-2 pr-2 text-blue-200">Attributes</p>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">_id <span className="pl-2 text-gray-400 text-sm">string</span></p>
                            <p className=" pb-2 text-gray-400 text-sm">MongoDB Object Id (Removed)</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">year <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The year the JSON response data is estimated of. The year range for this endpoint is between 1979 and 2019.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">population<span className="pl-2 text-gray-400 text-sm">string</span></p>
                            <p className="pb-2 text-gray-400 text-sm">This is estimated population for the total United States for the given year.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">total_arrests <span className="pl-2 text-gray-400 text-sm">string</span></p>
                            <p className="pb-2 text-gray-400 text-sm"> The full name of the state.</p>
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
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">arson <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">violent_crime <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">property_crime <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">other_assault <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">forgery <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">fraud <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">embezzlement <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">stolen_property <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">vandalism <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">weapons <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">prostitution <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">other_sex_offenses <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">drug_abuse <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">gambling <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">against_family <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">dui <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">liquor_laws <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">drunkenness <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">disorderly_conduct <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">vagrancy <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">other <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">suspicion <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">curfew_loitering <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The theft or attempted theft of a motor vehicle.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <div className="text-sm rounded border border-gray-500">
                        <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-300" >Arrests Schema</p>
                        <code>
                            <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm overflow-x-auto">
                                <pre>{JSON.stringify(exampleArrestsSchema, null, 2)}</pre>
                            </p>
                        </code>
                    </div>
                </div>
            </div>
            <div id="arrestsFullData" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Full Arrests Data</h1>
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
                            <p className="pt-2 pb-2 text-gray-400 text-sm">An array of objects with national arrests data between 1995-2016. </p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block container w-1/2 p-4">
                    <h1 className="text-3xl invisible pb-6">Data/Code</h1>
                    <ApiCard endpoint="/"></ApiCard>
                    <ResponseCard response={[{"year":1979,"state_abbr":"AK","state_name":"Alaska","population":406000,"violent_crime":1994,"homicide":54,"rape":292,"robbery":445,"aggravated_assault":1203,"property_crime":23193,"burglary":5616,"larceny":15076,"motor_vehicle_theft":2501},{"year":1979,"state_abbr":"AL","state_name":"Alabama","population":3769000,"violent_crime":15578,"homicide":496,"rape":1037,"robbery":4127,"aggravated_assault":9918,"property_crime":144372,"burglary":48517,"larceny":83791,"motor_vehicle_theft":12064},"..."]}></ResponseCard>
                </div>
            </div>
            
            
        </div>
    );
}
export default SummaryApiDocs;