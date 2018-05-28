import React from 'react';
import { Link } from 'react-router-dom'
import './css/axure_rp_page.css'
import './data/styles.css'
import './files/retrievepwd/styles.css'
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

class AS_RetrievePWD extends React.Component {
  
    render() {
      return (
        <div id="base" class="">

        
        <div id="u79" class="ax_default _图片_">
          <img id="u79_img" class="img " src={u0_img}/>
        </div>
  
        
        <div id="u80" class="ax_default _图片_">
          <img id="u80_img" class="img " src={u1_img}/>
        </div>
  
        
        <div id="u81" class="ax_default _图片_">
          <img id="u81_img" class="img " src={u23_img}/>
        </div>
  
        
        <div id="u82" class="ax_default _文本段落">
          <img id="u82_img" class="img " src={u6_img}/>
          <div id="u82_text" class="text ">
            <p><span>忘记密码</span></p>
          </div>
        </div>
  
        
        <div id="u83" class="ax_default _文本段落">
          <img id="u83_img" class="img " src={u83_img}/>
          <div id="u83_text" class="text ">
            <p><span>请输入帐号找回密码</span></p>
          </div>
        </div>
  
        
        <div id="u84" class="ax_default _文本段落">
          <img id="u84_img" class="img " src={u21_img}/>
          <div id="u84_text" class="text ">
            <p><span>登录帐号</span></p>
          </div>
        </div>
  
        
        <div id="u85" class="ax_default line">
          <img id="u85_img" class="img " src={u25_img}/>
        </div>
  
        
        <div id="u86" class="ax_default _文本段落">
          <img id="u86_img" class="img " src={u29_img}/>
          <div id="u86_text" class="text ">
            <Link to='AS_RetrievePWD'><p><span>寄送验证短信</span></p></Link>
          </div>
        </div>
      </div>
      );
  }
}       
export default AS_RetrievePWD;