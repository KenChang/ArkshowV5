import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import './css/axure_rp_page.css'
import './data/styles.css'
import './files/resendCode/styles.css'
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
import u40_img from './images/resendCode/u40.png'


class ArkShowCode extends React.Component {
  
    render() {
      return (
        <div id="base" class="">

        
        <div id="u30" class="ax_default _图片_">
          <img id="u30_img" class="img " src={u0_img}/>
        </div>
  
        
        <div id="u31" class="ax_default _图片_">
          <img id="u31_img" class="img " src={u1_img}/>
        </div>
  
        
        <div id="u32" class="ax_default _文本段落">
          <img id="u32_img" class="img " src={u21_img}/>
          <div id="u32_text" class="text ">
            <p><span>选择国家</span></p>
          </div>
        </div>
  
        
        <div id="u33" class="ax_default _文本段落">
          <img id="u33_img" class="img " src={u21_img}/>
          <div id="u33_text" class="text ">
            <p><span>手机号码</span></p>
          </div>
        </div>
  
        
        <div id="u34" class="ax_default _图片_">
          <img id="u34_img" class="img " src={u23_img}/>
        </div>
  
        
        <div id="u35" class="ax_default _文本段落">
          <img id="u35_img" class="img " src={u6_img}/>
          <div id="u35_text" class="text ">
            <p><span>新户注册</span></p>
          </div>
        </div>
  
        
        <div id="u36" class="ax_default line">
          <img id="u36_img" class="img " src={u25_img}/>
        </div>
  
        
        <div id="u37" class="ax_default line">
          <img id="u37_img" class="img " src={u25_img}/>
        </div>
  
        
        <div id="u38" class="ax_default _文本段落">
          <img id="u38_img" class="img " src={u28_img}/>
          <div id="u38_text" class="text ">
            <p><span>+86</span></p>
          </div>
        </div>
  
        
        <div id="u39" class="ax_default _文本段落">
          <img id="u39_img" class="img " src={u21_img}/>
          <div id="u39_text" class="text ">
            <p><span>重新寄送</span></p>
          </div>
        </div>
  
        
        <div id="u40" class="ax_default _文本段落">
          <img id="u40_img" class="img " src={u40_img}/>
          <div id="u40_text" class="text ">
            <p><span>输入验证码</span></p>
          </div>
        </div>
  
        
        <div id="u41" class="ax_default line">
          <img id="u41_img" class="img " src={u25_img}/>
        </div>
  
        
        <div id="u42" class="ax_default _文本段落">
          <img id="u42_img" class="img " src={u21_img}/>
          <div id="u42_text" class="text ">
            <Link to='AS_InputData'><p><span>继续注册</span></p></Link>
          </div>
        </div>
      </div>
      );
  }
}       
export default ArkShowCode;