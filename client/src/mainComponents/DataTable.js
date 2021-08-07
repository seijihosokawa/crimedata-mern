import React, { useEffect, useState } from 'react';


const DataTable = (tableData) => {
    const summaryCols = ["year", "population", "violent_crime", "homicide", "rape", "robbery", "aggravated_assault", "property_crime", "burglary", "larceny", "motor_vehicle_theft"]

    console.log(tableData)
    return (
        <div className="text-sm overflow-y-auto">
          <table>
          <tr>
            {
              summaryCols.map((item) => 
              <th>{item}</th>)
            }
          </tr>
            {/* { tableData.map(( {year, population, violent_crime, homicide, rape, robbery, aggravated_assault, property_crime, burglary, larceny, motor_vehicle_theft}) => (
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
            )) }*/
            }
            </table>
        </div>
    )
}

export default DataTable;