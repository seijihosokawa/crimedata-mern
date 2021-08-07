import React, { useState, useEffect } from 'react';
import MainNavbar from './MainNavbar';
import DataTable from './DataTable';


const Main = () => {
    const [currDataset, setCurrDataset] = useState('summary/years-total');
    const [summaryData, setSummaryData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://crimedata-mern.herokuapp.com/v1/'+currDataset).then((response) => response.json()).then((data) => {
            setSummaryData(data);
            setDataLoading(false);
          });
      }, [currDataset]);

    return (
        <div id="page" className="bg-gray-800 h-full ">
            <MainNavbar onChange={(value) => setCurrDataset(value)}/>
            <div className="flex justify-center mx-auto w-5/6">
                {dataLoading ? <p>Loading</p> : <DataTable tableData={summaryData}/>}
            </div>            
        </div>
    )
}

export default Main;