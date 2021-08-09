import React, { useState, useEffect } from 'react';
import MainNavbar from './MainNavbar';
import DataTable from './DataTable';
import InfoBox from './InfoBox'


const Main = () => {
    const [currDataset, setCurrDataset] = useState('summary/years-total');
    const [summaryData, setSummaryData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [datasetYears, setDatasetYears] = useState([1979, 2019]);
    
    useEffect(() => {
        fetch('https://crimedata-mern.herokuapp.com/v1/'+currDataset).then((response) => response.json()).then((data) => {
            setSummaryData(data);
            setDataLoading(false);
          });
      }, [currDataset]);
    
    useEffect(() => {
        if(currDataset !== 'summary/years-total'){
            fetch('https://crimedata-mern.herokuapp.com/v1/'+currDataset+'/years').then((response) => response.json()).then((data) => {
            setDatasetYears([data[0], data[data.length-1]]);
          });
        }
        setDatasetYears([1979, 2019]);
    }, [currDataset]);

    return (
        <div id="page" className="bg-gray-800 h-full">
            <MainNavbar onChange={(value) => setCurrDataset(value)}/>
            <div className="mx-auto w-5/6">
                <InfoBox dataset={currDataset} years={datasetYears}/>
            </div>
            <div className="flex justify-center mx-auto w-5/6">
                {dataLoading ? <p>Loading</p> : <DataTable tableData={summaryData}/>}
            </div>            
        </div>
    )
}

export default Main;