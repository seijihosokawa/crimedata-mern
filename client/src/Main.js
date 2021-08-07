import React, { useState } from 'react';
import MainNavbar from './MainNavbar';
import DataTable from './DataTable';


const Main = () => {
    const [currDataset, setCurrDataset] = useState('years-total')
    return (
        <div id="page" className="bg-gray-800 h-full">
            <MainNavbar onChange={(value) => setCurrDataset(value)}/>
            <div className="flex justify-center mx-auto w-5/6">
                <DataTable/>
            </div>            
        </div>
    )
}

export default Main;