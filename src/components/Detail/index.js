import React,{Component} from "react";
import axios from "axios";
import ReactSwipe from 'react-swipe';
import "./index.scss"

class  Detail  extends Component{
    constructor(props){
        super(props);
        this.state={
            detaillist:[],
            titlelist:null,
        }
    }
    componentDidMount(){
        axios.get(`/product/info/product_detail.json?product_id=${this.props.match.params.myid}`).then(res=>{
           console.log(res.data.basic);   
           this.setState({
            titlelist:res.data.basic,
            detaillist:res.data.basic.product_images
           })
        })
     console.log(this.props.match.params.myid)
    }
    render(){
        return <div className="detail">
            <ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:2000}} key={this.state.detaillist.length}>
            {
                this.state.detaillist.map(item=>
                    <img src={item.img_url} key={item.id} alt="home"/>
                )  
            }
            </ReactSwipe>
           {
               this.state.titlelist?
               <div class="title">
               <p>{this.state.titlelist.name}-{this.state.titlelist.spec}</p>
               <p>{this.state.titlelist.description}</p>
               <mark>闪购价</mark>
               <p>{this.state.titlelist.price/100}/{this.state.titlelist.refund_type}/位</p>
               <p>￥{this.state.titlelist.origin_price/100}</p>
               <p>随时退</p>
               </div>
               :null
           }
           
        </div>
    }
}
export default Detail;