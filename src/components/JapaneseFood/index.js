import React ,{Component} from "react";
import "./index.scss"
import {NavLink} from "react-router-dom"
class JapaneseFood extends Component{
    render(){
        return <div className="japaneseFood">
            <ul>
                <li><NavLink to="/japaneseFood/quanbu" activeClassName="active">全部</NavLink></li>
                <li><NavLink to="/japaneseFood/zhineng" activeClassName="active">智能排序</NavLink></li>
            </ul>

            {
                this.props.children
            }
        </div>
    }
}

export default JapaneseFood;