import React ,{Component} from "react";
import "./index.scss"
import axios from "axios"
class All extends Component{
    constructor(props){
        super(props);
        this.state = {
            westernlist:[]
        }
    }
    componentDidMount(){
        axios.get("/4/tab/category_product_list.json?category_id=7&sort=1&from_id=0&city_id=140&page=0").then(res=>{
            console.log(res.data);
            this.setState({
                westernlist:res.data
            })
        })
    }
    render(){
        return <div className="all">
            <div>
               {
                   this.state.westernlist.map(item=>
                    <dl>
                        <dt>
                            <img src={item.product_image}/>
                        </dt>
                        <dd>
                            <p>{item.name}</p>
                            <p>{item.price/100}元/位<mark>￥{item.original_price/100}</mark></p>
                            <p>{item.area}</p>
                        </dd>
                    </dl>
                    
                    )
               }
            </div>

        </div>
    }
}

export default All;
