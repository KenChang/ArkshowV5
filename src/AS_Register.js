import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './css/axure_rp_page.css'
import './data/styles.css'
import './files/register/styles.css'
import u0_img from './images/login/u0.jpg'
import u1_img from './images/login/u1.png'
import u2_img from './images/login/u2.png'
import u6_img from './images/login/u6.png'
import u21_img from './images/register/u21.png'
import u23_img from './images/register/u23.png'
import u25_img from './images/register/u25.png'
import u26_img from './images/register/u26.png'
import u28_img from './images/register/u28.png'
import u29_img from './images/register/u29.png'


class AS_Register extends React.Component {
  
    render() {
      return (
        <div id="base" class="">

        <div id="u19" class="ax_default _图片_">
          <img id="u19_img" class="img " src={u0_img}/>
        </div>
  
        <div id="u20" class="ax_default _图片_">
          <img id="u20_img" class="img " src={u1_img}/>
        </div>
  
        <div id="u21" class="ax_default _文本段落">
          <img id="u21_img" class="img " src={u21_img}/>
          <div id="u21_text" class="text ">
            <p><span>选择国家</span></p>
          </div>
        </div>
  
        <div id="u22" class="ax_default _文本段落">
          <img id="u22_img" class="img " src={u21_img}/>
          <div id="u22_text" class="text ">
            <p><span>手机号码</span></p>
          </div>
        </div>
  
        <div id="u23" class="ax_default _图片_">
          <img id="u23_img" class="img " src={u23_img}/>
        </div>
  
        <div id="u24" class="ax_default _文本段落">
          <img id="u24_img" class="img " src={u6_img}/>
          <div id="u24_text" class="text ">
            <p><span>新户注册</span></p>
          </div>
        </div>
  
        <div id="u25" class="ax_default line">
          <img id="u25_img" class="img " src={u25_img}/>
        </div>
  
        <div id="u26" class="ax_default flow_shape">
          <img id="u26_img" class="img " src={u26_img}/>
        </div>
  
        <div id="u27" class="ax_default line">
          <img id="u27_img" class="img " src={u25_img}/>
        </div>
  
        <div id="u28" class="ax_default _文本段落">
          <img id="u28_img" class="img " src={u28_img}/>
          <div id="u28_text" class="text ">
            <p><span>+86</span></p>
          </div>
        </div>
  
        <div id="u29" class="ax_default _文本段落">
          <img id="u29_img" class="img " src={u29_img}/>
          <div id="u29_text" class="text ">
          <Link to='AS_Code'><p><span>寄送验证短信</span></p></Link>
          </div>
        </div>
      </div>
      );
  }
}       
export default AS_Register;