import React from 'react';


const InfoBox = ({dataset, years}) => {

    return (
        <div className="flex justify-around text-sm m-4 text-gray-300">
          <div className="border rounded p-2 border-gray-400">Dataset Years: <span className="text-gray-400">{years[0]} - {years[1]}</span></div>
          <div className="border rounded p-2 border-gray-400">Current Dataset: <span className="text-gray-400">{dataset}</span></div>
        </div>
    )
}

export default InfoBox;