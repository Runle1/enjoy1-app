import React ,{Component} from "react";
import "./index.scss";
import axios from "axios"
class Hotpot extends Component{
    constructor(props){
        super(props);
        this.state = {
            hotpotlist:[]
        }
    }
    componentDidMount(){
        axios.get("/4/tab/category_product_list.json?category_id=5&sort=1&from_id=0&city_id=140&page=0").then(res=>{
            console.log(res.data);
            this.setState({
                hotpotlist:res.data
            })
        })
        console.log(this.props);
    }
    render(){
        return <div className="hotpot">
            {
                this.state.hotpotlist.map(item=>
                    <dl key={item.product_id} onClick={this.handleClick.bind(this,item.product_id)}>
                        <dt>
                            <img src={item.product_image}/>
                        </dt>
                        <dd>
                           <p>{item.name}</p> 
                           <p>{item.price/100}元/{item.refund_type}位 <mark>￥{item.original_price}</mark></p> 
                        </dd>
                    </dl>
                    
                    )
            }  
        </div>
    }
    handleClick(id){
        console.log(this.props);
        this.props.history.push("/detail/"+id);
    }
}

export default Hotpot;