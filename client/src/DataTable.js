import React, { useEffect, useState } from 'react';


const DataTable = () => {
    const [summaryData, setSummaryData] = useState([]);
    const summaryCols = ["year", "population", "violent_crime", "homicide", "rape", "robbery", "aggravated_assault", "property_crime", "burglary", "larceny", "motor_vehicle_theft"]

    useEffect(() => {
        fetch("https://crimedata-mern.herokuapp.com/v1/summary/years-total/")
          .then((response) => response.json())
          .then((data) => {
            setSummaryData(data);
          });
      }, []);
    return (
        <div className="text-sm overflow-y-auto">
          <tr>
            {
              summaryCols.map((item) => 
              <th>{item}</th>)
            }
          </tr>
            { summaryData.map(( {year, population, violent_crime, homicide, rape, robbery, aggravated_assault, property_crime, burglary, larceny, motor_vehicle_theft}) => (
              <tr>
                <td>{year}</td> 
                <td>{population}</td>
                <td>{violent_crime}</td>
                <td>{homicide}</td>
                <td>{rape}</td>
                <td>{robbery}</td>
                <td>{aggravated_assault}</td>
                <td>{property_crime}</td>
                <td>{burglary}</td>
                <td>{larceny}</td>
                <td>{motor_vehicle_theft}</td>
              </tr>
            ))
            }
        </div>
    )
}

export default DataTable;