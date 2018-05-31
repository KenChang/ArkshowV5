import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import AS_Login from './AS_Login'
import AS_Agreement from './AS_Agreement'

import AS_InputData from './AS_InputData'
import AS_InputRCode from './AS_InputRCode'
import AS_MarketAnalysis from './AS_MarketAnalysis'
import AS_Register from './AS_Register'
import AS_ResetPWD from './AS_ResetPWD'
import AS_RetrievePWD from './AS_RetrievePWD'
import App from './App'
//import TitleBar from './TitleBar';
//import StatusBar from './StatusBar';
//import App from './App';


//ReactDOM.render(<AS_RStockMap />, document.getElementById('ArkShowWelcome'));
//ReactDOM.render(<AS_TitleBar />, document.getElementById('ArkShowWelcome'));
//ReactDOM.render(<TitleBar />, document.getElementById('ArkShowWelcome'));
//ReactDOM.render((<Router><AS_Login /></Router>), document.getElementById('ArkShowWelcome'));


ReactDOM.render(
    <Router>
    <div>
      <Switch>
          <Route path="/AS_Login" component={AS_Login}/>           
          <Route path="/AS_Register" component={AS_Register}/>
          <Route path="/AS_RetrievePWD" component={AS_RetrievePWD}/>   
          <Route path="/AS_ResetPWD" component={AS_ResetPWD}/>   
          <Route path="/AS_Agreement" component={AS_Agreement}/>             
          <Route path="/" component={App}/>                                                        
        </Switch>                    
        </div>
        </Router>
    , document.getElementById('ArkShowWelcome')
);
registerServiceWorker();