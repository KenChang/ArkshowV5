import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom';
import jwtService from './jwtService';
import withAuth from './withAuth';
import {BrowserRouter} from 'react-router-dom';
import AS_TitleFunc from './AS_TitleFunc';
import AS_RiskAnalysis from './AS_RiskAnalysis'
import AS_MarketAnalysis from './AS_MarketAnalysis'
import AS_AIAnalysis from './AS_AIAnalysis'
import AS_BuyOrSell from './AS_BuyOrSell'
import AS_StockExpert from './AS_StockExpert'
import AS_MyFocus from './AS_MyFocus'
import AS_RStockMap from './AS_RStockMap'
import AS_History from './AS_History'
import AS_PersonalData from './AS_PersonalData'
import AS_ResetCapital from './AS_ResetCapital'
import AS_SequenceCode from './AS_SequenceCode'
import AS_Code from './AS_Code'
import AS_Configuration from './AS_Configuration'

const Auth = new jwtService();

class App extends Component {

   handleLogout(){
    Auth.logout()
    this.props.history.replace('/AS_Login');
  }

  render() {
    return (
      <Router>
      <div>
        <Switch>
        <Route path="/AS_RiskAnalysis" component={AS_RiskAnalysis}/>
        <Route path="/AS_MarketAnalysis" component={AS_MarketAnalysis}/>
        <Route path="/AS_AIAnalysis" component={AS_AIAnalysis}/>     
        <Route path="/AS_BuyOrSell" component={AS_BuyOrSell}/>
        <Route path="/AS_StockExpert" component={AS_StockExpert}/>
        <Route path="/AS_MyFocus" component={AS_MyFocus}/>
        <Route path="/AS_RStockMap" component={AS_RStockMap}/> 
        <Route path="/AS_Code" component={AS_Code}/> 
        <Route path="/AS_Configuration" render={props => {return <AS_Configuration onClick={this.handleLogout.bind(this)} />;}} />
        <Route path="/AS_History" component={AS_History}/>
        <Route path="/AS_PersonalData" component={AS_PersonalData}/>
        <Route path="/AS_ResetCapital" component={AS_ResetCapital}/>
        <Route path="/AS_SequenceCode" component={AS_SequenceCode}/> 
        <Route path="/AS_TitleFunc" component={AS_TitleFunc}/>      
        <Route path="/" component={AS_RiskAnalysis}/>
        </Switch>                    
      </div>
      </Router>
    );
  }
}

export default withAuth(App);
