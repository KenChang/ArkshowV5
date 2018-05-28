import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import './css/axure_rp_page.css'
import './data/styles.css'
import './files/inputdata/styles.css'
import u0_img from './images/login/u0.jpg'
import u1_img from './images/login/u1.png'
import u5_img from './images/login/u5.png'
import u6_img from './images/login/u6.png'
import u21_img from './images/register/u21.png'
import u23_img from './images/register/u23.png'
import u25_img from './images/register/u25.png'
import u26_img from './images/register/u26.png'
import u28_img from './images/register/u28.png'
import u29_img from './images/register/u29.png'
import u40_img from './images/resendCode/u40.png'
import u51_img from './images/inputdata/u51.png'
import u54_img from './images/inputdata/u54.png'

class AS_InputData extends React.Component {
  
    render() {
      return (
        <div id="base" class="">
        <div id="u43" class="ax_default _图片_">
          <img id="u43_img" class="img " src={u0_img} />
        </div>
  

        <div id="u44" class="ax_default _图片_">
          <img id="u44_img" class="img " src={u1_img}/>
        </div>
  

        <div id="u45" class="ax_default _文本段落">
          <img id="u45_img" class="img " src={u21_img}/>
          <div id="u45_text" class="text ">
            <p><span>注册帐号</span></p>
          </div>
        </div>
  

        <div id="u46" class="ax_default _文本段落">
          <img id="u46_img" class="img " src={u21_img}/>
          <div id="u46_text" class="text ">
            <p><span>确认密码</span></p>
          </div>
        </div>
  

        <div id="u47" class="ax_default _图片_">
          <Link to='AS_RetrievePWD'><img id="u47_img" class="img " src={u23_img}/></Link>
        </div>
  

        <div id="u48" class="ax_default _文本段落">
          <img id="u48_img" class="img " src={u6_img}/>
          <div id="u48_text" class="text ">
            <p><span>新户注册</span></p>
          </div>
        </div>
  

        <div id="u49" class="ax_default line">
          <img id="u49_img" class="img " src={u25_img}/>
        </div>
  

        <div id="u50" class="ax_default line">
          <img id="u50_img" class="img " src={u25_img}/>
        </div>

        <div id="u51" class="ax_default _文本段落">
          <img id="u51_img" class="img " src={u51_img}/>
          <div id="u51_text" class="text ">
            <p><span style={{color:'#FFFFFF'}}>我同意 </span>
            <Link to='AS_Agreement'><span style={{textDecorationLine:'underline',color:'#FFCC00'}}>注册须知</span></Link></p>
          </div>
        </div>
  

        <div id="u52" class="ax_default _文本段落">
          <img id="u52_img" class="img " src={u21_img}/>
          <div id="u52_text" class="text ">
            <p><span>输入密码</span></p>
          </div>
        </div>
  

        <div id="u53" class="ax_default line">
          <img id="u53_img" class="img " src={u25_img}/>
        </div>
  

        <div id="u54" class="ax_default _文本段落">
          <img id="u54_img" class="img " src={u54_img}/>
          <div id="u54_text" class="text ">
            <p><span>( 8~12个英数字 )</span></p>
          </div>
        </div>
  

        <div id="u55" class="ax_default box_1">
          <div id="u55_div" class=""></div>
        </div>
  

        <div id="u56" class="ax_default _图片_">
          <img id="u56_img" class="img " src={u5_img}/>
        </div>
  

        <div id="u57" class="ax_default _文本段落">
          <img id="u57_img" class="img " src={u6_img}/>
          <div id="u57_text" class="text ">
            <p><span>注册</span></p>
          </div>
        </div>
      </div>
      );
  }
}       
export default AS_InputData;