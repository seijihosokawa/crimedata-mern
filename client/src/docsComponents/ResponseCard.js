import React from "react";


function ResponseCard({response}) {
    

    return (
        <div className="md:overflow-ellipsis overflow-hidden text-sm mt-4 text-sm rounded border border-gray-500">
            <code>                                
                <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-400" >RESPONSE</p>
                <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm overflow-auto	max-h-80">
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </p>
            </code>                        
        </div>
    );
}

export default ResponseCard;
