import React ,{Component} from "react";
import {NavLink} from "react-router-dom"
import "./index.scss"
class Sidebar extends Component{
    render(){
        return <div className="sidebar">
            <div className="bendi">
                <p>本地餐厅</p>
                <ul className="wf" onClick={this.props.event}>
                    <li><NavLink to="/western/all">西餐</NavLink></li>
                    <li><NavLink to="/hotpot">中国菜</NavLink></li>
                    <li><NavLink to="/japaneseFood">日本料理</NavLink></li>
                    <li><NavLink to="/japaneseFood">咖啡甜点</NavLink></li>
                    <li><NavLink to="/japaneseFood">自助餐</NavLink></li>
                    <li><NavLink to="/japaneseFood">酒吧</NavLink></li>
                </ul>
            </div>
            <div className="meirong">
                <p>美容健身</p>
                <ul className="mr">
                    <li>美甲美睫</li>
                    <li>美容SPA</li>
                    <li>美发</li>
                    <li>健身</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                </ul>
            </div>
            <div className="song">
                <p>本地送</p>
                <ul className="so">
                    <li>甜品</li>
                    <li>鲜花礼品</li>
                    <li>同城活动</li>
                    <li>中秋月饼</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                </ul>
            </div>
            <div className="active">
                <p>本地送</p>
                <ul className="hd">
                    <li>同城活动</li>
                    <li>趣味课程</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                </ul>
            </div>
        </div>
    }
}

export default Sidebar;