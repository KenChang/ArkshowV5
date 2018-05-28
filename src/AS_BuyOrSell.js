import React from 'react';
import { Link } from 'react-router-dom'
import AS_TitleFunc from './AS_TitleFunc'
import './css/axure_rp_page.css'
import './data/styles.css'
import './files/buyorsell/styles.css'
import AS_Login from './AS_Login'
import AS_Agreement from './AS_Agreement'
import u28_img from './images/register/u28.png'
import u109_img from './images/riskanalysis/u109.png'
import u110_img from './images/riskanalysis/u110.png'
import u112_img from './images/riskanalysis/u112.jpg'
import u113_img from './images/riskanalysis/u113.png'
import u120_img from './images/riskanalysis/u120.png'
import u121_img from './images/riskanalysis/u121.png'
import u123_img from './images/riskanalysis/u123.png'
import u124_img from './images/riskanalysis/u124.png'
import u125_img from './images/riskanalysis/u125.png'
import u126_img from './images/riskanalysis/u126.png'
import u127_img from './images/riskanalysis/u127.png'
import u133_img from './images/riskanalysis/u133.png'
import u134_img from './images/riskanalysis/u134.png'
import u202_img from './images/riskanalysis/u202.png'
import u289_img from './images/rstockmap/u289.png'
import u290_img from './images/rstockmap/u290.png'
import u293_img from './images/rstockmap/u293.png'
import u294_img from './images/rstockmap/u294.png'
import u298_img from './images/rstockmap/u298.png'
import u301_img from './images/rstockmap/u301.png'
import u302_img from './images/rstockmap/u302.png'
import u321_img from './images/rstockmap/u321.png'
import u724_img from './images/buyorsell/u724.png'
import u727_img from './images/buyorsell/u727.png'
import u732_img from './images/buyorsell/u732.png'
import u733_img from './images/buyorsell/u733.png'
import u737_img from './images/buyorsell/u737.png'
import u738_img from './images/buyorsell/u738.png'
import u740_img from './images/buyorsell/u740.png'
import u744_img from './images/buyorsell/u744.png'
import u745_img from './images/buyorsell/u745.png'
import u760_img from './images/buyorsell/u760.png'
import u761_img from './images/buyorsell/u761.png'
import u765_img from './images/buyorsell/u765.png'
import u767_img from './images/buyorsell/u767.png'
import u771_img from './images/buyorsell/u771.png'
import u775_img from './images/buyorsell/u775.png'
import u839_img from './images/buyorsell/u839.png'

class AS_BuyOrSell extends React.Component {
  renderSwitch(param) {
    switch(param) {
      case '1':
        return AS_Login;
      default:
        return AS_Agreement;
    }
  }  
    render() {
      return (
        <div id="base" class="">
        <AS_TitleFunc />
        <div id="u707" class="ax_default _图片_">
          <img id="u707_img" class="img " src={u112_img} alt="" />
        </div>
  
        
        <div id="u708" class="ax_default _图片_">
          <img id="u708_img" class="img " src={u113_img} alt="" />
        </div>
  
        
        <div id="u715" class="ax_default _图片_">
          <img id="u715_img" class="img " src={u125_img} alt="" />
        </div>
  
        
        <div id="u716" class="ax_default _图片_">
          <img id="u716_img" class="img " src={u126_img} alt="" />
        </div>
  
        
        <div id="u720" class="ax_default _文本段落">
          <img id="u720_img" class="img " src={u127_img} alt="" />
          <div id="u720_text" class="text ">
            <p><span>多空</span></p><p><span>佈阵</span></p>
          </div>
        </div>
  
        
        <div id="u724" class="ax_default _文本段落">
          <img id="u724_img" class="img " src={u724_img} alt="" />
          <div id="u724_text" class="text ">
            <p><span>今日佈阵纪录</span></p>
          </div>
        </div>
  
        
        <div id="u725" class="ax_default line">
          <img id="u725_img" class="img " src={u133_img} alt="" />
        </div>
  
        
        <div id="u726" class="ax_default _文本段落">
          <img id="u726_img" class="img " src={u321_img} alt="" />
          <div id="u726_text" class="text ">
            <p><span>2017-12-22</span></p>
          </div>
        </div>
  
        
        <div id="u727" class="ax_default _文本段落">
          <img id="u727_img" class="img " src={u727_img} alt="" />
          <div id="u727_text" class="text ">
            <p><span>时间</span></p><p><span>方式</span></p>
          </div>
        </div>
  
        
        <div id="u728" class="ax_default _文本段落">
          <img id="u728_img" class="img " src={u727_img} alt="" />
          <div id="u728_text" class="text ">
            <p><span>代码</span></p><p><span>股票</span></p>
          </div>
        </div>
  
        
        <div id="u729" class="ax_default _文本段落">
          <img id="u729_img" class="img " src={u289_img} alt="" />
          <div id="u729_text" class="text ">
            <p><span>成交价</span></p>
          </div>
        </div>
  
        
        <div id="u730" class="ax_default _文本段落">
          <img id="u730_img" class="img " src={u727_img} alt="" />
          <div id="u730_text" class="text ">
            <p><span>股数</span></p><p><span>权重</span></p>
          </div>
        </div>
  
        
        <div id="u731" class="ax_default _文本段落">
          <img id="u731_img" class="img " src={u727_img} alt="" />
          <div id="u731_text" class="text ">
            <p><span>金额</span></p><p><span>税费</span></p>
          </div>
        </div>
  
        
        <div id="u732" class="ax_default _文本段落">
          <img id="u732_img" class="img " src={u732_img} alt="" />
          <div id="u732_text" class="text ">
            <p><span>胜率</span></p><p><span>胜/全</span></p>
          </div>
        </div>
  
        
        <div id="u733" class="ax_default _文本段落">
          <img id="u733_img" class="img " src={u733_img} alt="" />
          <div id="u733_text" class="text ">
            <p><span>多空型态</span></p><p><span>多空评分</span></p>
          </div>
        </div>
  
        
        <div id="u734" class="ax_default _文本段落">
          <img id="u734_img" class="img " src={u301_img} alt="" />
          <div id="u734_text" class="text ">
            <p><span>09:44</span></p>
          </div>
        </div>
  
        
        <div id="u735" class="ax_default _文本段落">
          <img id="u735_img" class="img " src={u293_img} alt="" />
          <div id="u735_text" class="text ">
            <p><span>002343SZ</span></p>
          </div>
        </div>
  
        
        <div id="u736" class="ax_default _文本段落">
          <img id="u736_img" class="img " src={u301_img} alt="" />
          <div id="u736_text" class="text ">
            <p><span>37.30</span></p>
          </div>
        </div>
  
        
        <div id="u737" class="ax_default _文本段落">
          <img id="u737_img" class="img " src={u737_img} alt="" />
          <div id="u737_text" class="text ">
            <p><span>-16,400</span></p>
          </div>
        </div>
  
        
        <div id="u738" class="ax_default _文本段落">
          <img id="u738_img" class="img " src={u738_img} alt="" />
          <div id="u738_text" class="text ">
            <p><span>679,440</span></p>
          </div>
        </div>
  
        
        <div id="u739" class="ax_default _文本段落">
          <img id="u739_img" class="img " src={u290_img} alt="" />
          <div id="u739_text" class="text ">
            <p><span>50%</span></p>
          </div>
        </div>
  
        
        <div id="u740" class="ax_default _文本段落">
          <img id="u740_img" class="img " src={u740_img} alt="" />
          <div id="u740_text" class="text ">
            <p><span>空</span></p>
          </div>
        </div>
  
        
        <div id="u741" class="ax_default _文本段落">
          <img id="u741_img" class="img " src={u290_img} alt="" />
          <div id="u741_text" class="text ">
            <p><span>现卖</span></p>
          </div>
        </div>
  
        
        <div id="u742" class="ax_default _文本段落">
          <img id="u742_img" class="img " src={u294_img} alt="" />
          <div id="u742_text" class="text ">
            <p><span>慈文传媒</span></p>
          </div>
        </div>
  
        
        <div id="u743" class="ax_default _文本段落">
          <img id="u743_img" class="img " src={u302_img} alt="" />
          <div id="u743_text" class="text ">
            <p><span>3.5%</span></p>
          </div>
        </div>
  
        
        <div id="u744" class="ax_default _文本段落">
          <img id="u744_img" class="img " src={u744_img} alt="" />
          <div id="u744_text" class="text ">
            <p><span>883</span></p>
          </div>
        </div>
  
        
        <div id="u745" class="ax_default _文本段落">
          <img id="u745_img" class="img " src={u745_img} alt="" />
          <div id="u745_text" class="text ">
            <p><span>2/4</span></p>
          </div>
        </div>
  
        
        <div id="u746" class="ax_default box_2">
          <div id="u746_div" class=""></div>
        </div>
  
        
        <div id="u747" class="ax_default _文本段落">
          <img id="u747_img" class="img " src={u301_img} alt="" />
          <div id="u747_text" class="text ">
            <p><span>09:44</span></p>
          </div>
        </div>
  
        
        <div id="u748" class="ax_default _文本段落">
          <img id="u748_img" class="img " src={u293_img} alt="" />
          <div id="u748_text" class="text ">
            <p><span>002343SZ</span></p>
          </div>
        </div>
  
        
        <div id="u749" class="ax_default _文本段落">
          <img id="u749_img" class="img " src={u301_img} alt="" />
          <div id="u749_text" class="text ">
            <p><span>37.30</span></p>
          </div>
        </div>
  
        
        <div id="u750" class="ax_default _文本段落">
          <img id="u750_img" class="img " src={u737_img} alt="" />
          <div id="u750_text" class="text ">
            <p><span>-16,400</span></p>
          </div>
        </div>
  
        
        <div id="u751" class="ax_default _文本段落">
          <img id="u751_img" class="img " src={u738_img} alt="" />
          <div id="u751_text" class="text ">
            <p><span>679,440</span></p>
          </div>
        </div>
  
        
        <div id="u752" class="ax_default _文本段落">
          <img id="u752_img" class="img " src={u290_img} alt="" />
          <div id="u752_text" class="text ">
            <p><span>50%</span></p>
          </div>
        </div>
  
        
        <div id="u753" class="ax_default _文本段落">
          <img id="u753_img" class="img " src={u740_img} alt="" />
          <div id="u753_text" class="text ">
            <p><span>空</span></p>
          </div>
        </div>
  
        
        <div id="u754" class="ax_default _文本段落">
          <img id="u754_img" class="img " src={u290_img} alt="" />
          <div id="u754_text" class="text ">
            <p><span>现卖</span></p>
          </div>
        </div>
  
        
        <div id="u755" class="ax_default _文本段落">
          <img id="u755_img" class="img " src={u294_img} alt="" />
          <div id="u755_text" class="text ">
            <p><span>慈文传媒</span></p>
          </div>
        </div>
  
        
        <div id="u756" class="ax_default _文本段落">
          <img id="u756_img" class="img " src={u302_img} alt="" />
          <div id="u756_text" class="text ">
            <p><span>3.5%</span></p>
          </div>
        </div>
  
        
        <div id="u757" class="ax_default _文本段落">
          <img id="u757_img" class="img " src={u744_img} alt="" />
          <div id="u757_text" class="text ">
            <p><span>883</span></p>
          </div>
        </div>
  
        
        <div id="u758" class="ax_default _文本段落">
          <img id="u758_img" class="img " src={u745_img} alt="" />
          <div id="u758_text" class="text ">
            <p><span>2/4</span></p>
          </div>
        </div>
  
        
        <div id="u759" class="ax_default line">
          <img id="u759_img" class="img " src={u298_img} alt="" />
        </div>
  
        
        <div id="u760" class="ax_default icon">
          <img id="u760_img" class="img " src={u760_img} alt="" />
        </div>
  
        
        <div id="u761" class="ax_default _文本段落">
          <img id="u761_img" class="img " src={u761_img} alt="" />
          <div id="u761_text" class="text ">
             <Link to='/AS_History' ><p><span>查询历史佈阵纪录</span></p></Link>
          </div>
        </div>
  
        
        <div id="u762" class="ax_default icon">
          <img id="u762_img" class="img " src={u202_img} alt="" />
        </div>
  
        
        <div id="u763" class="ax_default _图片_">
          <img id="u763_img" class="img " src={u112_img} alt="" />
        </div>
  
        
        <div id="u764" class="ax_default _图片_">
          <img id="u764_img" class="img " src={u113_img} alt="" />
        </div>
  
        
        <div id="u765" class="ax_default _文本段落">
          <img id="u765_img" class="img " src={u765_img} alt="" />
          <div id="u765_text" class="text ">
            <p><span>多空双向实时投组</span></p>
          </div>
        </div>
  
        
        <div id="u766" class="ax_default box_2">
          <div id="u766_div" class=""></div>
        </div>
  
        
        <div id="u767" class="ax_default _文本段落">
          <img id="u767_img" class="img " src={u767_img} alt="" />
          <div id="u767_text" class="text ">
            <p><span>完整投组</span></p>
            {this.renderSwitch(1)}
          </div>
        </div>
  
        
        <div id="u768" class="ax_default _文本段落">
          <img id="u768_img" class="img " src={u767_img} alt="" />
          <div id="u768_text" class="text ">
            <p><span>现股买入</span></p>
          </div>
        </div>
  
        
        <div id="u769" class="ax_default _文本段落">
          <img id="u769_img" class="img " src={u767_img} alt="" />
          <div id="u769_text" class="text ">
            <p><span>融资买入</span></p>
          </div>
        </div>
  
        
        <div id="u770" class="ax_default _文本段落">
          <img id="u770_img" class="img " src={u767_img} alt="" />
          <div id="u770_text" class="text ">
            <p><span>融券卖出</span></p>
          </div>
        </div>
  
        
        <div id="u771" class="ax_default line">
          <img id="u771_img" class="img " src={u771_img} alt="" />
        </div>
  
        
        <div id="u772" class="ax_default box_2">
          <div id="u772_div" class=""></div>
        </div>
  
        
        <div id="u773" class="ax_default _文本段落">
          <img id="u773_img" class="img " src={u290_img} alt="" />
          <div id="u773_text" class="text ">
            <p><span>方式</span></p>
          </div>
        </div>
  
        
        <div id="u774" class="ax_default _文本段落">
          <img id="u774_img" class="img " src={u727_img} alt="" />
          <div id="u774_text" class="text ">
            <p><span>代码</span></p><p><span>股票</span></p>
          </div>
        </div>
  
        
        <div id="u775" class="ax_default _文本段落">
          <img id="u775_img" class="img " src={u775_img} alt="" />
          <div id="u775_text" class="text ">
            <p><span>成交价</span></p><p><span>最新价</span></p>
          </div>
        </div>
  
        
        <div id="u776" class="ax_default _文本段落">
          <img id="u776_img" class="img " src={u727_img} alt="" />
          <div id="u776_text" class="text ">
            <p><span>股数</span></p><p><span>权重</span></p>
          </div>
        </div>
  
        
        <div id="u777" class="ax_default _文本段落">
          <img id="u777_img" class="img " src={u732_img} alt="" />
          <div id="u777_text" class="text ">
            <p><span>胜率</span></p><p><span>胜/全</span></p>
          </div>
        </div>
  
        
        <div id="u778" class="ax_default _文本段落">
          <img id="u778_img" class="img " src={u733_img} alt="" />
          <div id="u778_text" class="text ">
            <p><span>多空型态</span></p><p><span>多空评分</span></p>
          </div>
        </div>
  
        
        <div id="u779" class="ax_default _文本段落">
          <img id="u779_img" class="img " src={u293_img} alt="" />
          <div id="u779_text" class="text ">
            <p><span>002343SZ</span></p>
          </div>
        </div>
  
        
        <div id="u780" class="ax_default _文本段落">
          <img id="u780_img" class="img " src={u301_img} alt="" />
          <div id="u780_text" class="text ">
            <p><span>37.30</span></p>
          </div>
        </div>
  
        
        <div id="u781" class="ax_default _文本段落">
          <img id="u781_img" class="img " src={u737_img} alt="" />
          <div id="u781_text" class="text ">
            <p><span>-16,400</span></p>
          </div>
        </div>
  
        
        <div id="u782" class="ax_default _文本段落">
          <img id="u782_img" class="img " src={u290_img} alt="" />
          <div id="u782_text" class="text ">
            <p><span>50%</span></p>
          </div>
        </div>
  
        
        <div id="u783" class="ax_default _文本段落">
          <img id="u783_img" class="img " src={u740_img} alt="" />
          <div id="u783_text" class="text ">
            <p><span>空</span></p>
          </div>
        </div>
  
        
        <div id="u784" class="ax_default _文本段落">
          <img id="u784_img" class="img " src={u290_img} alt="" />
          <div id="u784_text" class="text ">
            <p><span>现卖</span></p>
          </div>
        </div>
  
        
        <div id="u785" class="ax_default _文本段落">
          <img id="u785_img" class="img " src={u294_img} alt="" />
          <div id="u785_text" class="text ">
            <p><span>慈文传媒</span></p>
          </div>
        </div>
  
        
        <div id="u786" class="ax_default _文本段落">
          <img id="u786_img" class="img " src={u302_img} alt="" />
          <div id="u786_text" class="text ">
            <p><span>3.5%</span></p>
          </div>
        </div>
  
        
        <div id="u787" class="ax_default _文本段落">
          <img id="u787_img" class="img " src={u745_img} alt="" />
          <div id="u787_text" class="text ">
            <p><span>2/4</span></p>
          </div>
        </div>
  
        
        <div id="u788" class="ax_default box_2">
          <div id="u788_div" class=""></div>
        </div>
  
        
        <div id="u789" class="ax_default _文本段落">
          <img id="u789_img" class="img " src={u293_img} alt="" />
          <div id="u789_text" class="text ">
            <p><span>002343SZ</span></p>
          </div>
        </div>
  
        
        <div id="u790" class="ax_default _文本段落">
          <img id="u790_img" class="img " src={u301_img} alt="" />
          <div id="u790_text" class="text ">
            <p><span>37.30</span></p>
          </div>
        </div>
  
        
        <div id="u791" class="ax_default _文本段落">
          <img id="u791_img" class="img " src={u737_img} alt="" />
          <div id="u791_text" class="text ">
            <p><span>-16,400</span></p>
          </div>
        </div>
  
        
        <div id="u792" class="ax_default _文本段落">
          <img id="u792_img" class="img " src={u290_img} alt="" />
          <div id="u792_text" class="text ">
            <p><span>50%</span></p>
          </div>
        </div>
  
        
        <div id="u793" class="ax_default _文本段落">
          <img id="u793_img" class="img " src={u740_img} alt="" />
          <div id="u793_text" class="text ">
            <p><span>空</span></p>
          </div>
        </div>
  
        
        <div id="u794" class="ax_default _文本段落">
          <img id="u794_img" class="img " src={u290_img} alt="" />
          <div id="u794_text" class="text ">
            <p><span>现卖</span></p>
          </div>
        </div>
  
        
        <div id="u795" class="ax_default _文本段落">
          <img id="u795_img" class="img " src={u294_img} alt="" />
          <div id="u795_text" class="text ">
            <p><span>慈文传媒</span></p>
          </div>
        </div>
  
        
        <div id="u796" class="ax_default _文本段落">
          <img id="u796_img" class="img " src={u302_img} alt="" />
          <div id="u796_text" class="text ">
            <p><span>3.5%</span></p>
          </div>
        </div>
  
        
        <div id="u797" class="ax_default _文本段落">
          <img id="u797_img" class="img " src={u745_img} alt="" />
          <div id="u797_text" class="text ">
            <p><span>2/4</span></p>
          </div>
        </div>
  
        
        <div id="u798" class="ax_default line">
          <img id="u798_img" class="img " src={u298_img} alt="" />
        </div>
  
        
        <div id="u799" class="ax_default box_2">
          <div id="u799_div" class=""></div>
        </div>
  
        
        <div id="u800" class="ax_default _文本段落">
          <img id="u800_img" class="img " src={u293_img} alt="" />
          <div id="u800_text" class="text ">
            <p><span>002343SZ</span></p>
          </div>
        </div>
  
        
        <div id="u801" class="ax_default _文本段落">
          <img id="u801_img" class="img " src={u301_img} alt="" />
          <div id="u801_text" class="text ">
            <p><span>37.30</span></p>
          </div>
        </div>
  
        
        <div id="u802" class="ax_default _文本段落">
          <img id="u802_img" class="img " src={u737_img} alt="" />
          <div id="u802_text" class="text ">
            <p><span>-16,400</span></p>
          </div>
        </div>
  
        
        <div id="u803" class="ax_default _文本段落">
          <img id="u803_img" class="img " src={u290_img} alt="" />
          <div id="u803_text" class="text ">
            <p><span>50%</span></p>
          </div>
        </div>
  
        
        <div id="u804" class="ax_default _文本段落">
          <img id="u804_img" class="img " src={u740_img} alt="" />
          <div id="u804_text" class="text ">
            <p><span>空</span></p>
          </div>
        </div>
  
        
        <div id="u805" class="ax_default _文本段落">
          <img id="u805_img" class="img " src={u290_img} alt="" />
          <div id="u805_text" class="text ">
            <p><span>现卖</span></p>
          </div>
        </div>
  
        
        <div id="u806" class="ax_default _文本段落">
          <img id="u806_img" class="img " src={u294_img} alt="" />
          <div id="u806_text" class="text ">
            <p><span>慈文传媒</span></p>
          </div>
        </div>
  
        
        <div id="u807" class="ax_default _文本段落">
          <img id="u807_img" class="img " src={u302_img} alt="" />
          <div id="u807_text" class="text ">
            <p><span>3.5%</span></p>
          </div>
        </div>
  
        
        <div id="u808" class="ax_default _文本段落">
          <img id="u808_img" class="img " src={u745_img} alt="" />
          <div id="u808_text" class="text ">
            <p><span>2/4</span></p>
          </div>
        </div>
  
        
        <div id="u809" class="ax_default box_2">
          <div id="u809_div" class=""></div>
        </div>
  
        
        <div id="u810" class="ax_default _文本段落">
          <img id="u810_img" class="img " src={u293_img} alt="" />
          <div id="u810_text" class="text ">
            <p><span>002343SZ</span></p>
          </div>
        </div>
  
        
        <div id="u811" class="ax_default _文本段落">
          <img id="u811_img" class="img " src={u301_img} alt="" />
          <div id="u811_text" class="text ">
            <p><span>37.30</span></p>
          </div>
        </div>
  
        
        <div id="u812" class="ax_default _文本段落">
          <img id="u812_img" class="img " src={u737_img} alt="" />
          <div id="u812_text" class="text ">
            <p><span>-16,400</span></p>
          </div>
        </div>
  
        
        <div id="u813" class="ax_default _文本段落">
          <img id="u813_img" class="img " src={u290_img} alt="" />
          <div id="u813_text" class="text ">
            <p><span>50%</span></p>
          </div>
        </div>
  
        
        <div id="u814" class="ax_default _文本段落">
          <img id="u814_img" class="img " src={u740_img} alt="" />
          <div id="u814_text" class="text ">
            <p><span>空</span></p>
          </div>
        </div>
  
        
        <div id="u815" class="ax_default _文本段落">
          <img id="u815_img" class="img " src={u290_img} alt="" />
          <div id="u815_text" class="text ">
            <p><span>现卖</span></p>
          </div>
        </div>
  
        
        <div id="u816" class="ax_default _文本段落">
          <img id="u816_img" class="img " src={u294_img} alt="" />
          <div id="u816_text" class="text ">
            <p><span>慈文传媒</span></p>
          </div>
        </div>
  
        
        <div id="u817" class="ax_default _文本段落">
          <img id="u817_img" class="img " src={u302_img} alt="" />
          <div id="u817_text" class="text ">
            <p><span>3.5%</span></p>
          </div>
        </div>
  
        
        <div id="u818" class="ax_default _文本段落">
          <img id="u818_img" class="img " src={u745_img} alt="" />
          <div id="u818_text" class="text ">
            <p><span>2/4</span></p>
          </div>
        </div>
  
        
        <div id="u819" class="ax_default box_2">
          <div id="u819_div" class=""></div>
        </div>
  
        
        <div id="u820" class="ax_default _文本段落">
          <img id="u820_img" class="img " src={u293_img} alt="" />
          <div id="u820_text" class="text ">
            <p><span>002343SZ</span></p>
          </div>
        </div>
  
        
        <div id="u821" class="ax_default _文本段落">
          <img id="u821_img" class="img " src={u301_img} alt="" />
          <div id="u821_text" class="text ">
            <p><span>37.30</span></p>
          </div>
        </div>
  
        
        <div id="u822" class="ax_default _文本段落">
          <img id="u822_img" class="img " src={u737_img} alt="" />
          <div id="u822_text" class="text ">
            <p><span>-16,400</span></p>
          </div>
        </div>
  
        
        <div id="u823" class="ax_default _文本段落">
          <img id="u823_img" class="img " src={u290_img} alt="" />
          <div id="u823_text" class="text ">
            <p><span>50%</span></p>
          </div>
        </div>
  
        
        <div id="u824" class="ax_default _文本段落">
          <img id="u824_img" class="img " src={u740_img} alt="" />
          <div id="u824_text" class="text ">
            <p><span>空</span></p>
          </div>
        </div>
  
        
        <div id="u825" class="ax_default _文本段落">
          <img id="u825_img" class="img " src={u290_img} alt="" />
          <div id="u825_text" class="text ">
            <p><span>现卖</span></p>
          </div>
        </div>
  
        
        <div id="u826" class="ax_default _文本段落">
          <img id="u826_img" class="img " src={u294_img} alt="" />
          <div id="u826_text" class="text ">
            <p><span>慈文传媒</span></p>
          </div>
        </div>
  
        
        <div id="u827" class="ax_default _文本段落">
          <img id="u827_img" class="img " src={u302_img} alt="" />
          <div id="u827_text" class="text ">
            <p><span>3.5%</span></p>
          </div>
        </div>
  
        
        <div id="u828" class="ax_default _文本段落">
          <img id="u828_img" class="img " src={u745_img} alt="" />
          <div id="u828_text" class="text ">
            <p><span>2/4</span></p>
          </div>
        </div>
  
        
        <div id="u829" class="ax_default box_2">
          <div id="u829_div" class=""></div>
        </div>
  
        
        <div id="u830" class="ax_default _文本段落">
          <img id="u830_img" class="img " src={u293_img} alt="" />
          <div id="u830_text" class="text ">
            <p><span>002343SZ</span></p>
          </div>
        </div>
  
        
        <div id="u831" class="ax_default _文本段落">
          <img id="u831_img" class="img " src={u301_img} alt="" />
          <div id="u831_text" class="text ">
            <p><span>37.30</span></p>
          </div>
        </div>
  
        
        <div id="u832" class="ax_default _文本段落">
          <img id="u832_img" class="img " src={u737_img} alt="" />
          <div id="u832_text" class="text ">
            <p><span>-16,400</span></p>
          </div>
        </div>
  
        
        <div id="u833" class="ax_default _文本段落">
          <img id="u833_img" class="img " src={u290_img} alt="" />
          <div id="u833_text" class="text ">
            <p><span>50%</span></p>
          </div>
        </div>
  
        
        <div id="u834" class="ax_default _文本段落">
          <img id="u834_img" class="img " src={u740_img} alt="" />
          <div id="u834_text" class="text ">
            <p><span>空</span></p>
          </div>
        </div>
  
        
        <div id="u835" class="ax_default _文本段落">
          <img id="u835_img" class="img " src={u290_img} alt="" />
          <div id="u835_text" class="text ">
            <p><span>现卖</span></p>
          </div>
        </div>
  
        
        <div id="u836" class="ax_default _文本段落">
          <img id="u836_img" class="img " src={u294_img} alt="" />
          <div id="u836_text" class="text ">
            <p><span>慈文传媒</span></p>
          </div>
        </div>
  
        
        <div id="u837" class="ax_default _文本段落">
          <img id="u837_img" class="img " src={u302_img} alt="" />
          <div id="u837_text" class="text ">
            <p><span>3.5%</span></p>
          </div>
        </div>
  
        
        <div id="u838" class="ax_default _文本段落">
          <img id="u838_img" class="img " src={u745_img} alt="" />
          <div id="u838_text" class="text ">
            <p><span>2/4</span></p>
          </div>
        </div>
  
        
        <div id="u839" class="ax_default ellipse">
          <img id="u839_img" class="img " src={u839_img} alt="" />
        </div>
  
        
        <div id="u840" class="ax_default ellipse">
          <img id="u840_img" class="img " src={u839_img} alt="" />
        </div>
  
        
        <div id="u841" class="ax_default ellipse">
          <img id="u841_img" class="img " src={u839_img} alt="" />
        </div>
  
        
        <div id="u842" class="ax_default ellipse">
          <img id="u842_img" class="img " src={u839_img} alt="" />
        </div>
  
        
        <div id="u843" class="ax_default ellipse">
          <img id="u843_img" class="img " src={u839_img} alt="" />
        </div>
  
        
        <div id="u844" class="ax_default ellipse">
          <img id="u844_img" class="img " src={u839_img} alt="" />
        </div>
  
        
        <div id="u845" class="ax_default ellipse">
          <img id="u845_img" class="img " src={u839_img} alt="" />
        </div>
  
        
        <div id="u846" class="ax_default ellipse">
          <img id="u846_img" class="img " src={u839_img} alt="" />
        </div>
  
        
        <div id="u847" class="ax_default _文本段落">
          <img id="u847_img" class="img " src={u301_img} alt="" />
          <div id="u847_text" class="text ">
            <p><span>39.50</span></p>
          </div>
        </div>
  
        
        <div id="u848" class="ax_default _文本段落">
          <img id="u848_img" class="img " src={u301_img} alt="" />
          <div id="u848_text" class="text ">
            <p><span>39.50</span></p>
          </div>
        </div>
  
        
        <div id="u849" class="ax_default _文本段落">
          <img id="u849_img" class="img " src={u301_img} alt="" />
          <div id="u849_text" class="text ">
            <p><span>39.50</span></p>
          </div>
        </div>
  
        
        <div id="u850" class="ax_default _文本段落">
          <img id="u850_img" class="img " src={u301_img} alt="" />
          <div id="u850_text" class="text ">
            <p><span>39.50</span></p>
          </div>
        </div>
  
        
        <div id="u851" class="ax_default _文本段落">
          <img id="u851_img" class="img " src={u301_img} alt="" />
          <div id="u851_text" class="text ">
            <p><span>39.50</span></p>
          </div>
        </div>
  
        
        <div id="u852" class="ax_default _文本段落">
          <img id="u852_img" class="img " src={u301_img} alt="" />
          <div id="u852_text" class="text ">
            <p><span>39.50</span></p>
          </div>
        </div>
      </div>
      );
  }
}       
export default AS_BuyOrSell;