import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import AS_TitleFunc from './AS_TitleFunc';
import AS_RiskAnalysis from './AS_RiskAnalysis'
import AS_MarketAnalysis from './AS_MarketAnalysis'
import AS_AIAnalysis from './AS_AIAnalysis'
import AS_BuyOrSell from './AS_BuyOrSell'
import AS_StockExpert from './AS_StockExpert'
import AS_MyFocus from './AS_MyFocus'
import AS_RStockMap from './AS_RStockMap'
import AS_Login from './AS_Login'
import AS_Agreement from './AS_Agreement'
import AS_History from './AS_History'
import AS_InputData from './AS_InputData'
import AS_InputRCode from './AS_InputRCode'
import AS_PersonalData from './AS_PersonalData'
import AS_Register from './AS_Register'
import AS_ResetCapital from './AS_ResetCapital'
import AS_ResetPWD from './AS_ResetPWD'
import AS_RetrievePWD from './AS_RetrievePWD'
import AS_SequenceCode from './AS_SequenceCode'
import AS_Code from './AS_Code'
import AS_Configuration from './AS_Configuration'
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
          <Route path="/AS_RiskAnalysis" component={AS_RiskAnalysis}/>
          <Route path="/AS_MarketAnalysis" component={AS_MarketAnalysis}/>
          <Route path="/AS_AIAnalysis" component={AS_AIAnalysis}/>
          <Route path="/AS_Agreement" component={AS_Agreement}/>            
          <Route path="/AS_BuyOrSell" component={AS_BuyOrSell}/>
          <Route path="/AS_StockExpert" component={AS_StockExpert}/>
          <Route path="/AS_MyFocus" component={AS_MyFocus}/>
          <Route path="/AS_RStockMap" component={AS_RStockMap}/> 
          <Route path="/AS_Login" component={AS_Login}/> 
          <Route path="/AS_Code" component={AS_Code}/> 
          <Route path="/AS_Configuration" component={AS_Configuration}/>           
          <Route path="/AS_History" component={AS_History}/>
          <Route path="/AS_InputData" component={AS_InputData}/>  
          <Route path="/AS_InputRCode" component={AS_InputRCode}/>   
          <Route path="/AS_PersonalData" component={AS_PersonalData}/>
          <Route path="/AS_Register" component={AS_Register}/>
          <Route path="/AS_ResetCapital" component={AS_ResetCapital}/>
          <Route path="/AS_ResetPWD" component={AS_ResetPWD}/>
          <Route path="/AS_RetrievePWD" component={AS_RetrievePWD}/>   
          <Route path="/AS_SequenceCode" component={AS_SequenceCode}/> 
          <Route path="/AS_TitleFunc" component={AS_TitleFunc}/>    
          <Route path="/AS_Register" component={AS_Register}/>
          <Route path="/AS_RetrievePWD" component={AS_RetrievePWD}/>   
          <Route path="/AS_ResetPWD" component={AS_ResetPWD}/>   
          <Route path="/AS_Agreement" component={AS_Agreement}/>             
          <Route path="" component={AS_Login}/>                                                        
        </Switch>                    
        </div>
        </Router>
    , document.getElementById('ArkShowWelcome')
);
registerServiceWorker();