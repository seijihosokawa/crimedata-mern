import React, { useState } from "react";


function ObjectAttribute({name, type, definition}) {
    const [hideDefinition, sethideDefinition] = useState(true);

    return (
        <div>
            <div className="flex pt-2 pb-2 pr-2 text-gray-200 cursor-pointer" onClick={() => sethideDefinition(!hideDefinition)}>
                {hideDefinition === true &&
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                }
                {hideDefinition === false &&
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                }
                <p>{name} <span className="pl-2 text-gray-400 text-sm">{type}</span></p>
            </div>
            {hideDefinition === false &&
                <p className=" pb-2 text-gray-400 text-sm">{definition}</p>
            }
        </div>

    );
}
export default ObjectAttribute;