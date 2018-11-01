import React ,{Component} from "react";
import "./index.scss"
import axios from "axios"
class Intelligentsorting extends Component{
    constructor(props){
        super(props);
        this.state = {
          sortlist:[]
        }
    }
    componentDidMount(){
        axios.get("/4/tab/sub_category.json?category_id=6&city_id=140&from_id=0").then(res=>{
            console.log(res.data.sort);
            this.setState({
                sortlist:res.data.sort
            })
        })
    }
    render(){
        return <div className="intelligentsorting">
            <div>
                {
                  this.state.sortlist.map(item=>
                    // <p>{item.sort_id}</p>
                    <p>{item.sort_name}</p>
                    )
                }

            </div>

            
        </div>
    }
}

export default Intelligentsorting;
