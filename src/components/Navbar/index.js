import React ,{Component} from "react";
import "./index.scss"
import {NavLink} from "react-router-dom"
import "../../assets/iconfont/iconfont.css"
class Navbar extends Component{
    render(){
        return <div className="navbar">
            <div className="header">
                <div className="left">
                    <p onClick={this.props.event}><NavLink to="/Sidebar">分类</NavLink></p>
                </div>
                 <img src={require('../../assets/1.png')} alt=""/>
                <div className="right">
                 <i className="iconfont icon-iconfonticon5"></i>
                 <i className="iconfont icon-chazhao"></i>
                </div>
            </div>
        </div>
    }
}

export default Navbar;