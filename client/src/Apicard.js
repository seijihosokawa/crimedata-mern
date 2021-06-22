import React, { useState } from "react";


function ApiCard({endpoint}) {
    const [ApiCardSelect, setApiCardSelect] = useState('curl');
    let request;

    function handleChange(event){
        setApiCardSelect(event.target.value)
    }

    if(ApiCardSelect === "python"){
        request = <div> <p><span className="text-yellow-100">import</span> requests</p>
            <p>requests.get("https://crimedata-mern.herokuapp.com{endpoint}")</p>
            <p>response.text</p>
        </div>
    } else if(ApiCardSelect === "java"){
        request = <div>
            <p><span className="text-red-400">var</span> client = HttpClient.newHttpClient();</p>
            <p><span className="text-red-400">var</span> request = HttpRequest.newBuilder(
                URI.create("https://crimedata-mern.herokuapp.com{endpoint}")).header("accept", "application/json").build();</p>
            <p><span className="text-red-400">var</span> response = client.send(request, new JsonBodyHandler&lt;&gt;(APOD.class));</p>
            <p>System.out.println(response.body().get().title);</p> 
        </div>
    } else if(ApiCardSelect === "axios"){
        request = <div>
            <p><span className="text-red-400">var</span> axios = <span className="text-yellow-100">require</span>("axios").default;</p>
            <p><span className="text-red-400">var</span> options = &#123;method: 'GET',url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',params: &#123; limit: 200&#125;,&#125;;</p>
            <p>axios.request(options).then(function (response) &#123;console.log(response.data);&#125;).catch(function (error) &#123;console.error(error);&#125;);</p>
        </div>
    } else {
        request = <div><span className="text-yellow-100">curl</span> https://crimedata-mern.herokuapp.com{endpoint}</div>
    }

    return (
        <div className="text-sm">
            <code>                                
                <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-400" ><span className="text-blue-600">GET</span> {endpoint}                 
                    <button className="float-right mr-2" onClick={() => {navigator.clipboard.writeText(`curl https://crimedata-mern.herokuapp.com${endpoint}`)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-blue-300 hover:text-gray-100" viewBox="0 0 20 20">
                        <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                        <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                        </svg>
                    </button>
                    <select className="float-right mr-2 bg-black bg-opacity-0" onChange={handleChange}> 
                        <option value="curl">cURL</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="axios">Axios</option>
                    </select>
                </p>
                <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm">{request}</p>
            </code>                        
        </div>
    );
}

export default ApiCard;
