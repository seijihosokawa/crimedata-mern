import React, { useState, useEffect } from 'react';
import MainNavbar from './MainNavbar';
import DataTable from './DataTable';


const Main = () => {
    const [currDataset, setCurrDataset] = useState('summary/years-total');
    const [summaryData, setSummaryData] = useState([]);
    const url = 'https://crimedata-mern.herokuapp.com/v1/';

    console.log(url+currDataset)
    useEffect(() => {
        fetch(url+currDataset).then((response) => response.json()).then((data) => {
              console.log(url+currDataset)
            setSummaryData(data);
          });
      });

    return (
        <div id="page" className="bg-gray-800 h-full ">
            <MainNavbar onChange={(value) => setCurrDataset(value)}/>
            <div className="flex justify-center mx-auto w-5/6">
                <DataTable tableData={summaryData}/>
            </div>            
        </div>
    )
}

export default Main;