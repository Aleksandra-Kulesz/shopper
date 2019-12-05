import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route
} from 'react-router-dom';
import {Main} from "./Components/MainSite/Main";
import {LogIn} from "./Components/Login/LogIn";
import {Dashboard} from "./Components/Dashboard/Dashboard";
import {Lists} from "./Components/Lists/Lists";

function App() {
    return (
        <HashRouter>
            <>
                <Route exact path='/' component={Main}/>
                <Route exact path='/login' component={LogIn}/>
                <Route exact path='/dashboard' component={Dashboard}/>
                <Route exact path='/lists' component={Lists}/>
                {/*<Route exact path='/finances' component={Finances}/>*/}
            </>
        </HashRouter>
    );
}

export default App;
