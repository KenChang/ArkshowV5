import React from 'react';
import { Link } from 'react-router-dom'
import AS_TitleFunc from './AS_TitleFunc'
import './css/axure_rp_page.css'
import './data/styles.css'
import './files/configuration/styles.css'
import u23_img from './images/register/u23.png'
import u28_img from './images/register/u28.png'
import u109_img from './images/riskanalysis/u109.png'
import u120_img from './images/riskanalysis/u120.png'
import u121_img from './images/riskanalysis/u121.png'
import u123_img from './images/riskanalysis/u123.png'
import u124_img from './images/riskanalysis/u124.png'
import u127_img from './images/riskanalysis/u127.png'
import u133_img from './images/riskanalysis/u133.png'
import u202_img from './images/riskanalysis/u202.png'
import u1755_img from './images/myfocus/u1755.png'
import u1759_img from './images/myfocus/u1759.png'
import u1763_img from './images/myfocus/u1763.png'
import u1765_img from './images/myfocus/u1765.png'
import u1864_img from './images/configuration/u1864.png'
import u1866_img from './images/configuration/u1866.png'
import u1867_img from './images/configuration/u1867.png'
import u1868_img from './images/configuration/u1868.png'

class AS_Configuration extends React.Component {
      propTypes: {
          onClick:   React.PropTypes.func
      }
      onClickHandler() {
        if (typeof this.props.onClick === 'function') {
            this.props.onClick();
            console.log('function');
        }  
        console.log('onClickHandler');   
      } 
    render() {
      return (
        <div id="base" class="">

        <AS_TitleFunc SearchBarOff='1'/>
  
        
        <div id="u1855" class="ax_default _文本段落">
          <img id="u1855_img" class="img " src={u127_img} alt="" />
          <div id="u1855_text" class="text ">
            <p><span>我的</span></p><p><span>关注</span></p>
          </div>
        </div>
  
        
        <div id="u1856" class="ax_default line">
          <img id="u1856_img" class="img " src={u133_img} alt="" />
        </div>
  
        
        <div id="u1857" class="ax_default _文本段落">
          <img id="u1857_img" class="img " src={u28_img} alt="" />
          <div id="u1857_text" class="text ">
            <p><span>剩馀天数</span></p>
          </div>
        </div>
  
        
        <div id="u1858" class="ax_default line">
          <img id="u1858_img" class="img " src={u1755_img} alt="" />
        </div>
  
        
        <div id="u1859" class="ax_default _文本段落">
          <img id="u1859_img" class="img " src={u1763_img} alt="" />
          <div id="u1859_text" class="text ">
            <p><span>海量智能消息通知</span></p>
          </div>
        </div>
  
        
        <div id="u1860" class="ax_default _文本段落">
          <img id="u1860_img" class="img " src={u1765_img} alt="" />
          <div id="u1860_text" class="text ">
            <p><span>意见反馈</span></p>
          </div>
        </div>
  
        
        <div id="u1861" class="ax_default _文本段落">
          <img id="u1861_img" class="img " src={u1759_img} alt="" />
          <div id="u1861_text" class="text ">
            <p><span >退出登陆</span></p>
            
          </div>
        </div>
  
        
        <div id="u1862" class="ax_default line">
          <img id="u1862_img" class="img " src={u1755_img} alt="" />
        </div>
  
        
        <div id="u1863" class="ax_default line">
          <img id="u1863_img" class="img " src={u1755_img} alt="" />
        </div>
  
        
        <div id="u1864" class="ax_default icon">
          <img id="u1864_img" class="img " src={u1864_img} alt="" />
        </div>
  
        
        <div id="u1865" class="ax_default box_1">
          <div id="u1865_div" class=""></div>
        </div>
  
        
        <div id="u1866" class="ax_default _文本段落">
          <img id="u1866_img" class="img " src={u1866_img} alt="" />
          <div id="u1866_text" class="text ">
            <p><span>请写下您使用过程中的感受、问题与建议，我们将儘速与您联繫，感谢您的使用。</span></p>
          </div>
        </div>
  
        
        <div id="u1867" class="ax_default icon">
          <img id="u1867_img" class="img " src={u1867_img} alt="" />
        </div>
  
        
        <div id="u1868" class="ax_default _文本段落">
          <img id="u1868_img" class="img " src={u1868_img} alt="" />
          <div id="u1868_text" class="text ">
            <p><span>添加图片</span></p>
          </div>
        </div>
  
        
        <div id="u1869" class="ax_default _文本段落">
          <img id="u1869_img" class="img " src={u1759_img} alt="" />
          <div id="u1869_text" class="text ">
            <p><span>送出意见</span></p>
          </div>
        </div>
  
        
        <div id="u1870" class="ax_default icon">
          <img id="u1870_img" class="img " src={u202_img} alt="" onClick={this.onClickHandler()}/>
        </div>
  
        
        <div id="u1871" class="ax_default line">
          <img id="u1871_img" class="img " src={u1755_img} alt="" />
        </div>
  
        
        <div id="u1872" class="ax_default _图片_">
          <Link to='./AS_MyFocus'><img id="u1872_img" class="img " src={u23_img} alt="" /></Link>
        </div>
      </div>
      );
  }
}       
export default AS_Configuration;