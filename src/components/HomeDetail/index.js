import React,{Component} from "react";
import axios from "axios";
import "./index.scss"

class HomeDetail extends Component{
    constructor(props){
        super(props);
        this.state={
        detaillist:[],
        titlelist:null,
        }
    }
    componentDidMount(){
        axios.get(`/product/info/product_detail.json?product_id=${this.props.match.params.myid}&sub_product_id=${this.props.match.params.homeid}`).then(res=>{
            console.log(res.data.basic)
        })
        console.log(this.props.match.params.homeid);
        console.log(this.props);
    }
    render(){
        return <div>
    
        </div>
    }
}

export default HomeDetail