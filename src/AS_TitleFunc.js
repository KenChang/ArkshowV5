import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Switch, Route } from 'react-router-dom'
import './css/axure_rp_page.css'
import './data/styles.css'
import './files/riskanalysis/styles.css'
import './files/aianalysis/styles.css'
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
import u28_img from './images/register/u28.png'
import u75_img from './images/agreement/u75.png'
import u76_img from './images/agreement/u76.png'
import u109_img from './images/riskanalysis/u109.png'
import u110_img from './images/riskanalysis/u110.png'
import u112_img from './images/riskanalysis/u112.jpg'
import u113_img from './images/riskanalysis/u113.png'
import u114_img from './images/riskanalysis/u114.png'
import u115_img from './images/riskanalysis/u115.png'
import u120_img from './images/riskanalysis/u120.png'
import u121_img from './images/riskanalysis/u121.png'
import u123_img from './images/riskanalysis/u123.png'
import u124_img from './images/riskanalysis/u124.png'
import u125_img from './images/riskanalysis/u125.png'
import u126_img from './images/riskanalysis/u126.png'
import u127_img from './images/riskanalysis/u127.png'
import u133_img from './images/riskanalysis/u133.png'
import u134_img from './images/riskanalysis/u134.png'
import u135_img from './images/riskanalysis/u135.png'
import u136_img from './images/riskanalysis/u136.png'

class AS_TitleBar extends React.Component {
  constructor() {
    super();
    var options = { year: "numeric", month: "numeric", day: "numeric" };
    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
        time = today.getHours()+ ':' + today.getMinutes();

    this.state = {
        date: date,
        time: time
    };
  }
  
    render() {
      return (
        <div id="base" class="">
        <div id="u109" class="ax_default _图片_">
          <img id="u109_img" class="img " src={u109_img} alt="" />
        </div>
  
        
        <div id="u110" class="ax_default _图片_">
          <img id="u110_img" class="img " src={u110_img} alt="" />
        </div>
  
        
        <div id="u111" class="ax_default box_1">
          <div id="u111_div" class=""></div>
        </div>
  
        <div id="u542" class="ax_default _文本段落">
          <img id="u127_img" class="img " src={u127_img} alt="" />
          <div id="u127_text" class="text ">
          <Link to='/AS_RiskAnalysis' ><p><span>风险</span></p><p><span>拆解</span></p></Link>
          </div>
        </div>
  
        
        <div id="u128" class="ax_default _文本段落">
          <img id="u128_img" class="img " src={u127_img} alt="" />
          <div id="u128_text" class="text ">
          <Link to='/AS_MarketAnalysis' ><p><span>市况</span></p><p><span>分析</span></p></Link>
          </div>
        </div>
  
        
        <div id="u129" class="ax_default _文本段落">
          <img id="u129_img" class="img " src={u127_img} alt="" />
          <div id="u129_text" class="text ">
          <Link to='/AS_AIAnalysis' ><p><span>智能</span></p><p><span>分析</span></p></Link>
          </div>
        </div>
  
        
        <div id="u130" class="ax_default _文本段落">
          <img id="u130_img" class="img " src={u127_img} alt="" />
          <div id="u130_text" class="text ">
          <Link to='/AS_BuyOrSell' ><p><span>多空</span></p><p><span>佈阵</span></p></Link>
          </div>
        </div>
  
        
        <div id="u131" class="ax_default _文本段落">
          <img id="u131_img" class="img " src={u127_img} alt="" />
          <div id="u131_text" class="text ">
          <Link to='/AS_StockExpert' ><p><span>股霸</span></p><p><span>练手</span></p></Link>
          </div>
        </div>
  
        
        <div id="u132" class="ax_default _文本段落">
          <img id="u132_img" class="img " src={u127_img} alt="" />
          <div id="u132_text" class="text ">
          <Link to='/AS_MyFocus' ><p><span>我的</span></p><p><span>关注</span></p></Link>
          </div>
        </div>

        <div id="u120" class="ax_default _图片_">
          <img id="u120_img" class="img " src={u120_img} alt="" />
        </div>


        <div id="u121" class="ax_default _图片_">
          <img id="u121_img" class="img " src={u121_img} alt="" />
        </div>


        <div id="u122" class="ax_default _文本段落">
          <img id="u122_img" class="img " src={u28_img} alt="" />
          <div id="u122_text" class="text ">
            <p><span>剩馀天数</span></p>
          </div>
        </div>


        <div id="u123" class="ax_default _文本段落">
          <img id="u123_img" class="img " src={u123_img} alt="" />
          <div id="u123_text" class="text ">
            <p><span>42</span></p>
          </div>
        </div>


        <div id="u124" class="ax_default _文本段落">
          <img id="u124_img" class="img " src={u124_img} alt="" />
          <div id="u124_text" class="text ">
            <p><span>{this.state.date}</span></p><p><span>{this.state.time}</span></p>
          </div>
        </div>


        <div id="u125" class="ax_default _图片_">
          <img id="u125_img" class="img " src={u125_img} alt="" />
        </div>


        <div id="u126" class="ax_default _图片_">
          <img id="u126_img" class="img " src={u126_img} alt="" />
        </div>

        <div id="u134" class="ax_default _文本段落">
          <img id="u134_img" class="img " src={u134_img} alt="" />
          <div id="u134_text" class="text ">
            <p><span>请输入代码查询</span></p>
          </div>
        </div>
           
        </div>
      );
    }
}
export default AS_TitleBar;