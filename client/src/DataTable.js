import React, { useEffect, useState } from 'react';


const DataTable = () => {
    const [summaryData, setSummaryData] = useState([]);

    useEffect(() => {
        fetch("https://crimedata-mern.herokuapp.com/v1/summary/years-total/")
          .then((response) => response.json())
          .then((data) => {
            setSummaryData(data);
          });
      }, []);
    return (
        <div>
            {
            }
        </div>
    )
}

export default DataTable;