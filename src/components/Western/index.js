import React ,{Component} from "react";
import {NavLink} from "react-router-dom"
import "./index.scss"
class Western extends Component{
    render(){
        return <div className="western">
            <ul>
                <li><NavLink to="/western/all" activeClassName="active">全部</NavLink></li>
                <li><NavLink to="/western/intelligentsorting" activeClassName="active">智能排序</NavLink></li>
            </ul>

            {
                this.props.children
            }
        </div>
    }
}

export default Western;