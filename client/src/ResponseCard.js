import React from "react";


function ResponseCard({response}) {

    return (
        <div className="md:overflow-ellipsis overflow-hidden text-sm pt-4">
            <code>                                
                <p className="pl-4 pt-1 pb-1 rounded-t bg-gray-700 text-gray-400" >RESPONSE</p>
                <p className="pl-4 pb-3 pt-2 rounded-b bg-gray-800 text-gray-300 text-sm md:overflow-x-auto	">
                    {response}
                </p>
            </code>                        
        </div>
    );
}

export default ResponseCard;
