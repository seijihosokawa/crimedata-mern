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
        <div id="page" className="flex flex-col h-screen justify-between bg-gray-800">
            <header className="h-auto">
                <MainNavbar onChange={(value) => setCurrDataset(value)}/>
                <div className="mx-auto w-5/6">
                    <InfoBox dataset={currDataset} years={datasetYears}/>
                </div>
            </header>
            <main className="h-full  overflow-auto	">
                
                <div className="flex justify-center mx-auto w-5/6 ">
                    {dataLoading ? <svg class="animate-spin h-4 w-4 rounded-full bg-transparent border-2 border-transparent border-opacity-90" viewBox="0 0 24 24"/> : <DataTable tableData={summaryData}/>}
                </div>
            </main>
            <footer className="h-14 pt-2">
                <div className="flex justify-center mx-auto w-5/6">
                    <div class="hidden md:block text-gray-500 text-sm "> © 2021 Copyright | Seiji Hosokawa</div>
                </div>            
            </footer>           
        </div>
    )
}

export default Main;