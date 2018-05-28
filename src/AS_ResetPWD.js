import React from 'react';
import { Link } from 'react-router-dom'
import './css/axure_rp_page.css'
import './data/styles.css'
import './files/resetpwd/styles.css'
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
import u74_img from './images/agreement/u74.png'
import u75_img from './images/agreement/u75.png'
import u76_img from './images/agreement/u76.png'
import u77_img from './images/agreement/u77.png'
import u83_img from './images/retrievepwd/u83.png'
import u100_img from './images/resetpwd/u100.png'

class AS_ResetPWD extends React.Component {
  
    render() {
      return (
        <div id="base" class="">

        
        <div id="u98" class="ax_default _图片_">
          <img id="u98_img" class="img " src={u0_img}/>
        </div>
  
        
        <div id="u99" class="ax_default _图片_">
          <img id="u99_img" class="img " src={u1_img}/>
        </div>
  
        
        <div id="u100" class="ax_default _文本段落">
          <img id="u100_img" class="img " src={u100_img}/>
          <div id="u100_text" class="text ">
            <p><span>请重新设置密码</span></p>
          </div>
        </div>
  
        
        <div id="u101" class="ax_default _文本段落">
          <img id="u101_img" class="img " src={u40_img}/>
          <div id="u101_text" class="text ">
            <p><span>确认新密码</span></p>
          </div>
        </div>
  
        
        <div id="u102" class="ax_default _图片_">
          <img id="u102_img" class="img " src={u23_img}/>
        </div>
  
        
        <div id="u103" class="ax_default _文本段落">
          <img id="u103_img" class="img " src={u6_img}/>
          <div id="u103_text" class="text ">
            <p><span>忘记密码</span></p>
          </div>
        </div>
  
        
        <div id="u104" class="ax_default line">
          <img id="u104_img" class="img " src={u25_img}/>
        </div>
  
        
        <div id="u105" class="ax_default _文本段落">
          <img id="u105_img" class="img " src={u21_img}/>
          <div id="u105_text" class="text ">
            <p><span>更改密码</span></p>
          </div>
        </div>
  
        
        <div id="u106" class="ax_default _文本段落">
          <img id="u106_img" class="img " src={u40_img}/>
          <div id="u106_text" class="text ">
            <p><span>输入新密码</span></p>
          </div>
        </div>
  
        
        <div id="u107" class="ax_default line">
          <img id="u107_img" class="img " src={u25_img}/>
        </div>
  
        
        <div id="u108" class="ax_default _文本段落">
          <img id="u108_img" class="img " src={u54_img}/>
          <div id="u108_text" class="text ">
            <p><span>( 8~12个英数字 )</span></p>
          </div>
        </div>
      </div>
      );
  }
}       
export default AS_ResetPWD;