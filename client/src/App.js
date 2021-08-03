import React from 'react';
import Docs from './Docs';
import Main from './Main';
import { Route } from 'react-router-dom';


const App = () => {
    return(
        <div className="App">
            <Route exact path="/" component={Main} />
            <Route exact path="/docs/api" component={Docs}/>   
        </div>
    )
}

export default App;