import React from 'react';
import SwaggerUi from 'swagger-ui-react';
import "swagger-ui-react/swagger-ui.css"


const App = () => {
    return(
        <div>
            <h1>App</h1>
            <SwaggerUi url="https://app.swaggerhub.com/apis-docs/seijih/crimes/1.0.0"/>
            
        </div>
    )
}

export default App;