import React from 'react';
// eslint-disable-next-line
import SwaggerUi from 'swagger-ui-react';
// eslint-disable-next-line
import "swagger-ui-react/swagger-ui.css"
import SideBar from './sidebar';


const App = () => {
    return(
        <div className="flex flex-no-wrap h-screen bg-gradient-to-r from-gray-800 to-blue-800">
            <div className="app__sidebar">
                <SideBar></SideBar>
            </div>
            {/*
            <SwaggerUi url="https://raw.githubusercontent.com/seijihosokawa/seijihosokawa.github.io/master/assets/swagger_crimes.json"/>
            */}
            <div className="container mx-auto py-10 h-full md:w-4/5 w-11/12 px-6">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="w-full h-full rounded border-dashed border-2 border-gray-300">{/* Place your content here */}</div>
            </div>
        </div>
    )
}

export default App;