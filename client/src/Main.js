import React, { useEffect, useState } from 'react';
import MainNavbar from './MainNavbar';


const Main = () => {
    const [summaryData, setSummaryData] = useState([]);

    useEffect(() => {
        fetch("https://crimedata-mern.herokuapp.com/v1/summary/years-total/")
          .then((response) => response.json())
          .then((data) => {
            setSummaryData(data);
          });
      }, []);
    return (
        <div id="page" className="flex flex-no-wrap bg-gray-800 h-screen">
            <MainNavbar/>
        </div>
    )
}

export default Main;