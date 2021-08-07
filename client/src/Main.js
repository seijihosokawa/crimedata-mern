import React, { useState } from 'react';
import MainNavbar from './MainNavbar';
import DataTable from './DataTable';


const Main = () => {
    const [currDataset, setCurrDataset] = useState('years-total')
    return (
        <div id="page" className="bg-gray-800 h-screen">
            <MainNavbar onChange={(value) => setCurrDataset(value)}/>
            <div>
                <p>{ currDataset }</p>
                <DataTable/>
            </div>            
        </div>
    )
}

export default Main;