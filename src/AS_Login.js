import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Switch, Route } from 'react-router-dom'
import './css/axure_rp_page.css'
import './data/styles.css'
import './files/login/styles.css'
import AS_Register from './AS_Register'
import AS_RetrievePWD from './AS_RetrievePWD'
import jwtService from './jwtService';
import u0_img from './images/login/u0.jpg'
import u1_img from './images/login/u1.png'
import u2_img from './images/login/u2.png'
import u3_img from './images/login/u3.png'
import u5_img from './images/login/u5.png'
import u6_img from './images/login/u6.png'
import u11_img from './images/login/u11.png'
import u12_img from './images/login/u12.png'
import u13_img from './images/login/u13.png'
import u14_img from './images/login/u14.png'
import u15_img from './images/login/u15.png'
import u16_img from './images/login/u16.png'
import u17_img from './images/login/u17.png'
import u18_img from './images/login/u18.png'


class AS_Login extends React.Component {
      constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new jwtService();
        this.state = {  
          username: "",
          password: ""
        }
    }
    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/');
    }
    render() {
      return (
        <div id="base" class="">
      
        <div id="u0" class="ax_default _图片_">
          <img id="u0_img" class="img " src={u0_img}/>
        </div>  
        
        <div id="u1" class="ax_default _图片_">
          <img id="u1_img" class="img " src={u1_img}/>
        </div>
        
        <div id="u2" class="ax_default _图片_">
          <img id="u2_img" class="img " src={u2_img}/>
        </div>
  
        
        <div id="u3" class="ax_default _图片_">
          <img id="u3_img" class="img " src={u3_img}/>
        </div>
  
        
        <div id="u4" class="ax_default _图片_">
          <img id="u4_img" class="img " src={u3_img}/>
        </div>
  
        
        <div id="u5" class="ax_default _图片_">
          <img id="u5_img" class="img " src={u5_img}/>
        </div>
  
        
        <div id="u6" class="ax_default _文本段落">
          <img id="u6_img" class="img " src={u6_img}/>
          <div id="u6_text" class="text ">
            <p><span>帐号:</span></p>
          </div>
        </div>
        <input placeholder="" name="username" type="text" onChange={this.handleChange} />
    
        <div id="u7" class="ax_default _文本段落">
          <img id="u7_img" class="img " src={u6_img}/>
          <div id="u7_text" class="text ">
            <p><span>密码:</span></p>                 
          </div>
        </div>
        <input placeholder="" name="password" type="password" onChange={this.handleChange}/>

        <div id="u8" class="ax_default _文本段落">
          <img id="u8_img" class="img " src={u6_img}/>
          <div id="u8_text" class="text ">
           <p><span>登录</span></p>
          </div>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <input className="form-submit" type="submit" />
        </form>
        
        <div id="u9" class="ax_default _文本段落">
          <img id="u9_img" class="img " src={u6_img}/>
          <div id="u9_text" class="text ">
            <Link to='./AS_RetrievePWD'><p><span>忘记密码</span></p></Link>
          </div>
        </div>
  
        
        <div id="u10" class="ax_default _文本段落">
          <img id="u10_img" class="img " src={u6_img}/>
          <div id="u10_text" class="text ">
          <Link to='./AS_Register'><p><span>新户注册</span></p></Link>
          </div>
        </div>
        
        <div id="u11" class="ax_default line">
          <img id="u11_img" class="img " src={u11_img}/>
        </div>
  
        <div id="u12" class="ax_default line">
          <img id="u12_img" class="img " src={u12_img}/>
        </div>
  
        
        <div id="u13" class="ax_default _文本段落">
          <img id="u13_img" class="img " src={u13_img}/>
          <div id="u13_text" class="text ">
            <p><span>其他登录</span></p>
          </div>
        </div>
  
        <div id="u14" class="ax_default _图片_">
          <img id="u14_img" class="img " src={u14_img}/>
        </div>
  
        
        <div id="u15" class="ax_default _图片_">
          <img id="u15_img" class="img " src={u15_img}/>
        </div>
  
        
        <div id="u16" class="ax_default _图片_">
          <img id="u16_img" class="img " src={u16_img}/>
        </div>
  
        
        <div id="u17" class="ax_default _图片_">
          <img id="u17_img" class="img " src={u17_img}/>
        </div>
  
        
        <div id="u18" class="ax_default _图片_">
          <img id="u18_img" class="img " src={u18_img}/>
        </div>   
      </div>
      );
  }

  handleFormSubmit(e){
    e.preventDefault();

    this.Auth.login(this.state.username,this.state.password)
        .then(res =>{
           this.props.history.replace('/');
        })
        .catch(err =>{
            alert(err);
        })
}

handleChange(e){
    this.setState(
        {
            [e.target.name]: e.target.value
        }
    )
}  
}       
export default AS_Login;