import React from "react";
import ApiCard from './Apicard.js';
import ResponseCard from './ResponseCard.js';
import ObjectAttribute from "./ObjectAttribute.js";


function ArrestsApiDocs() {
    let exampleArrestsSchema = {"year":2016,"population":323127513,"total_arrests":10662252,"homicide":11788,"rape":23632,"robbery":95754,"aggravated_assault":383977,"burglary":207325,"larceny":1050058,"motor_vehicle_theft":86088,"arson":9812,"violent_crime":515151,"property_crime":1353283,"other_assault":1078808,"forgery":56661,"fraud":128531,"embezzlement":15937,"stolen_property":93981,"vandalism":195951,"weapons":156777,"prostitution":38306,"other_sex_offenses":51063,"drug_abuse":1572579,"gambling":3705,"against_family":88748,"dui":1017808,"liquor_laws":234899,"drunkenness":376433,"disorderly_conduct":369733,"vagrancy":24851,"other":3254871,"suspicion":576,"curfew_loitering":34176};

    return (
        <div className="divide-y divide-gray-200 text-sm md:text-base">
            <div id="arrests" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl md:text-4xl font-medium">Arrest Data - Reported Number of Arrests by Crime</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This dataset contains the yearly number of reported arrests for various offenses reported by participating law enforcement agencies. Note that only agencies that have reported arrests for 12 months of the year are represented in the annual counts that are included in the database. This dataset shows the totals of reported arrests for the nation from 1995–2016.</p>
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
                            <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">https://crimedata-mern.herokuapp.com/v1/arrests</p>
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
            <div id="arrestsObject" className="flex flex-row w-full pt-12 pb-6">
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
                            <p className="pt-2 pb-2 pr-2 text-gray-200">population <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">This is estimated population for the total United States for the given year.</p>
                        </div>
                        <div>
                            <p className="pt-2 pb-2 pr-2 text-gray-200">total_arrests <span className="pl-2 text-gray-400 text-sm">integer</span></p>
                            <p className="pb-2 text-gray-400 text-sm">The total number of arrests in the United States of that year.</p>
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
                            <p className="pt-6 pb-2 pr-2 text-blue-200">More Attributes</p>
                        </div>
                        <ObjectAttribute name="motor_vehicle_theft" type="integer" definition="The theft or attempted theft of a motor vehicle."></ObjectAttribute>
                        <ObjectAttribute name="arson" type="integer" definition="Any willful or malicious burning or attempt to burn, with or without intent to defraud, a dwelling house, public building, motor vehicle or aircraft, personal property of another, etc."></ObjectAttribute>
                        <ObjectAttribute name="violent_crime" type="integer" definition="Includes the offenses of murder and nonnegligent manslaughter, forcible rape, robbery, and aggravated assault. Post-2012, the violent crime index excludes rape arrests."></ObjectAttribute>
                        <ObjectAttribute name="property_crime" type="integer" definition="Includes the offenses of burglary, larceny-theft, motor vehicle theft, and arson."></ObjectAttribute>
                        <ObjectAttribute name="other_assault" type="integer" definition="Assaults and attempted assaults which are not of an aggravated nature and do not result in serious injury to the victim. Stalking, intimidation, coercion, and hazing are included."></ObjectAttribute>
                        <ObjectAttribute name="forgery" type="integer" definition="The altering, copying, or imitating of something, without authority or right, with the intent to deceive or defraud by passing the copy or thing altered or imitated as that which is original or genuine; or the selling, buying, or possession of an altered, copied, or imitated thing with the intent to deceive or defraud. Attempts are included."></ObjectAttribute>
                        <ObjectAttribute name="fraud" type="integer" definition="The intentional perversion of the truth for the purpose of inducing another person or other entity in reliance upon it to part with something of value or to surrender a legal right. Fraudulent conversion and obtaining of money or property by false pretenses. Confidence games and bad checks, except forgeries and counterfeiting, are included."></ObjectAttribute>
                        <ObjectAttribute name="embezzlement" type="integer" definition="The unlawful misappropriation or misapplication by an offender to his/her own use or purpose of money, property, or some other thing of value entrusted to his/her care, custody, or control."></ObjectAttribute>
                        <ObjectAttribute name="stolen_property" type="integer" definition="Buying, receiving, possessing, selling, concealing, or transporting any property with the knowledge that it has been unlawfully taken, as by burglary, embezzlement, fraud, larceny, robbery, etc. Attempts are included."></ObjectAttribute>
                        <ObjectAttribute name="vandalism" type="integer" definition="To willfully or maliciously destroy, injure, disfigure, or deface any public or private property, real or personal, without the consent of the owner or person having custody or control by cutting, tearing, breaking, marking, painting, drawing, covering with filth, or any other such means as may be specified by local law. Attempts are included."></ObjectAttribute>
                        <ObjectAttribute name="weapons" type="integer" definition="The violation of laws or ordinances prohibiting the manufacture, sale, purchase, transportation, possession, concealment, or use of firearms, cutting instruments, explosives, incendiary devices, or other deadly weapons. Attempts are included."></ObjectAttribute>
                        <ObjectAttribute name="prostitution" type="integer" definition="The unlawful promotion of or participation in sexual activities for profit, including attempts. Includes soliciting customers or transporting persons for prostitution purposes; owning, managing, or operating a dwelling or other establishment for the purpose of providing a place where prostitution is performed; or otherwise assisting or promoting prostitution."></ObjectAttribute>
                        <ObjectAttribute name="other_sex_offenses" type="integer" definition="Offenses against chastity, common decency, morals, and the like. Incest, indecent exposure, and statutory rape are included. Attempts are included."></ObjectAttribute>
                        <ObjectAttribute name="drug_abuse" type="integer" definition="The violation of laws prohibiting the production, distribution, and/or use of certain controlled substances. The unlawful cultivation, manufacture, 
                            distribution, sale, purchase, use, possession, transportation, or importation of any controlled drug or narcotic substance. Arrests for violations of state and local laws, specifically those 
                            relating to the unlawful possession, sale, use, growing, manufacturing, and making of narcotic drugs. The following drug categories are specified: opium or cocaine and their derivatives 
                            (morphine, heroin, codeine); marijuana; synthetic narcotics—manufactured narcotics that can cause true addiction (demerol, methadone); and dangerous nonnarcotic drugs (barbiturates, 
                            benzedrine). Drug abuse violations are divided into two categories: (1) Drug sale/manufacturing and (2) Drug possession."></ObjectAttribute>
                        <ObjectAttribute name="gambling" type="integer" definition="To unlawfully bet or wager money or something else of value; assist, promote, or operate a game of chance for money or some other stake; possess or transmit wagering information; manufacture, sell, purchase, possess, or transport gambling equipment, devices, or goods; or tamper with the outcome of a sporting event or contest to gain a gambling advantage."></ObjectAttribute>
                        <ObjectAttribute name="against_family" type="integer" definition="Unlawful nonviolent acts by a family member (or legal guardian) that threaten the physical, mental, or economic well-being or morals of another family member and that are not classifiable as other offenses, such as Assault or Sex Offenses. Attempts are included."></ObjectAttribute>
                        <ObjectAttribute name="dui" type="integer" definition="Driving or operating a motor vehicle or common carrier while mentally or physically impaired as the result of consuming an alcoholic beverage or using a drug or narcotic."></ObjectAttribute>
                        <ObjectAttribute name="liquor_laws" type="integer" definition="The violation of state or local laws or ordinances prohibiting the manufacture, sale, purchase, transportation, possession, or use of alcoholic beverages, not including driving under the influence and drunkenness. Federal violations are excluded."></ObjectAttribute>
                        <ObjectAttribute name="drunkenness" type="integer" definition="To drink alcoholic beverages to the extent that one's mental faculties and physical coordination are substantially impaired. Driving under the influence is excluded."></ObjectAttribute>
                        <ObjectAttribute name="disorderly_conduct" type="integer" definition="Any behavior that tends to disturb the public peace or decorum, scandalize the community, or shock the public sense of morality."></ObjectAttribute>
                        <ObjectAttribute name="vagrancy" type="integer" definition="The violation of a court order, regulation, ordinance, or law requiring the withdrawal of persons from the streets or other specified areas; prohibiting persons from remaining in an area or place in an idle or aimless manner; or prohibiting persons from going from place to place without visible means of support."></ObjectAttribute>
                        <ObjectAttribute name="other" type="integer" definition="All violations of state or local laws not specifically identified as Part I or Part II offenses, except traffic violations."></ObjectAttribute>
                        <ObjectAttribute name="suspicion" type="integer" definition="Arrested for no specific offense and released without formal charges being placed."></ObjectAttribute>
                        <ObjectAttribute name="curfew_loitering" type="integer" definition="Violations by juveniles of local curfew or loitering ordinances."></ObjectAttribute>
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
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives all objects within the arrersts dataset.</p>

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
                    <ApiCard endpoint="arrests/"></ApiCard>
                    <ResponseCard response={[{"year":1995,"population":262803276,"total_arrests":15119800,"homicide":21230,"rape":34650,"robbery":171870,"aggravated_assault":568480,"burglary":386500,"larceny":1530200,"motor_vehicle_theft":191900,"arson":20000,"violent_crime":796250,"property_crime":2128600,"other_assault":1290400,"forgery":122300,"fraud":436400,"embezzlement":15200,"stolen_property":166500,"vandalism":311100,"weapons":243900,"prostitution":97700,"other_sex_offenses":94500,"drug_abuse":1476100,"gambling":19500,"against_family":142900,"dui":1436000,"liquor_laws":594900,"drunkenness":708100,"disorderly_conduct":748600,"vagrancy":25900,"other":3865400,"suspicion":12100,"curfew_loitering":149800},"..."]}></ResponseCard>
                </div>
            </div>
            <div id="arrestsGetYearsList" className="flex flex-row w-full pt-12 pb-6">
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
                    <ApiCard endpoint="arrests/years"></ApiCard>
                    <ResponseCard response={[1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]}></ResponseCard>
                </div>
            </div>
            <div id="arrestsGetSpecificYear" className="flex flex-row w-full pt-12 pb-6">
                <div className="container w-full md:w-1/2 p-4 pt-4">
                    <h1 className="text-gray-100 text-3xl font-medium">Get Specific Year</h1>
                    <p className="pt-6 pb-2 pr-2 text-blue-200">This endpoint retreives an object detailing the amount of national arrrests by each offense
                        from the year requested. The years this endpoint will return are 1995-2016. Any other year will return an error.</p>
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
                    <ApiCard endpoint="arrests/years/:year"></ApiCard>
                    <ResponseCard response={[{"year":2014,"population":318907401,"total_arrests":11205833,"homicide":10571,"rape":21007,"robbery":94403,"aggravated_assault":372685,"burglary":237974,"larceny":1238190,"motor_vehicle_theft":68422,"arson":9394,"violent_crime":498666,"property_crime":1553980,"other_assault":1093258,"forgery":56783,"fraud":141293,"embezzlement":16227,"stolen_property":88946,"vandalism":198400,"weapons":140713,"prostitution":47598,"other_sex_offenses":55456,"drug_abuse":1561231,"gambling":5637,"against_family":102336,"dui":1117852,"liquor_laws":321125,"drunkenness":414854,"disorderly_conduct":436014,"vagrancy":27380,"other":3274430,"suspicion":1310,"curfew_loitering":53654}]}></ResponseCard>
                </div>
            </div>
            <div id="arrestsGetYearRange" className="flex flex-row w-full pt-12 pb-6">
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
                    <ApiCard endpoint="arrests/years/:yearstart/:yearend"></ApiCard>
                    <ResponseCard response={[{"year":2003,"population":290788976,"total_arrests":13639479,"homicide":13190,"rape":26350,"robbery":107553,"aggravated_assault":449933,"burglary":290956,"larceny":1145074,"motor_vehicle_theft":152934,"arson":16163,"violent_crime":597026,"property_crime":1605127,"other_assault":1246698,"forgery":111823,"fraud":299138,"embezzlement":16826,"stolen_property":126775,"vandalism":273431,"weapons":167972,"prostitution":75190,"other_sex_offenses":91546,"drug_abuse":1678192,"gambling":10954,"against_family":136034,"dui":1448148,"liquor_laws":612079,"drunkenness":548616,"disorderly_conduct":639371,"vagrancy":28948,"other":3665543,"suspicion":7163,"curfew_loitering":136461},"...",{"year":2005,"population":296507061,"total_arrests":14094186,"homicide":14062,"rape":25528,"robbery":114616,"aggravated_assault":449297,"burglary":298835,"larceny":1146696,"motor_vehicle_theft":147459,"arson":16337,"violent_crime":603503,"property_crime":1609327,"other_assault":1301392,"forgery":118455,"fraud":321521,"embezzlement":18970,"stolen_property":133856,"vandalism":279562,"weapons":193469,"prostitution":84891,"other_sex_offenses":91625,"drug_abuse":1846351,"gambling":11180,"against_family":129128,"dui":1371919,"liquor_laws":597838,"drunkenness":556167,"disorderly_conduct":678231,"vagrancy":33227,"other":3863785,"suspicion":3764,"curfew_loitering":140835}]}></ResponseCard>
                </div>
            </div>
            <div id="arrestsGetOffenses" className="flex flex-row w-full pt-12 pb-6">
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
                    <ApiCard endpoint="arrests/offenses"></ApiCard>
                    <ResponseCard response={["homicide","rape","robbery","aggravated_assault","burglary","larceny","motor_vehicle_theft","arson","violent_crime","property_crime","other_assault","forgery","fraud","embezzlement","stolen_property","vandalism","weapons","prostitution","other_sex_offenses","drug_abuse","gambling"]}></ResponseCard>
                </div>
            </div>
        </div>
    );
}
export default ArrestsApiDocs;