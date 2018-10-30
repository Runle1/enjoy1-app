import React ,{Component} from "react";
import "./index.scss"
import "../../assets/iconfont/iconfont.css"
class Navbar extends Component{
    render(){
        return <div className="navbar">
            <div className="header">
                <div className="left">
                    <p onClick={this.props.event}>分类</p>
                </div>
                 <img src={require('../../assets/1.png')} alt=""/>
                <div className="right">
                 <i class="iconfont icon-iconfonticon5"></i>
                 <i class="iconfont icon-chazhao"></i>
                </div>
            </div>
        </div>
    }
}

export default Navbar;