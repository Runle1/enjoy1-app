import React,{Component} from "react";
import axios from "axios";
import ReactSwipe from 'react-swipe';
import "./index.scss"

class  Detail  extends Component{
    constructor(props){
        super(props);
        this.state={
            detaillist:[]
        }
    }
    componentDidMount(){
        axios.get(`/product/info/product_detail.json?product_id=${this.props.match.params.myid}`).then(res=>{
           console.log(res.data);
           console.log(res.data.basic.product_images);     
           this.setState({
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
        </div>
    }
}
export default Detail;