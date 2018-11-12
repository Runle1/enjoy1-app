import React ,{Component} from "react";
import ReactSwipe from 'react-swipe';
import axios from "axios"
import "./index.scss"
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            looplist:[],
            imglooplist:[],
            hotpotlist:[]
        }
    }
    componentDidMount(){
        axios.get("/hub/home/v1/web/week_choice.json?city_id=140&page=0").then(res=>{
            console.log(res.data);
            // console.log(res.data[0]);
            // console.log(res.data[0].tabs);
            this.setState({
                looplist:res.data,
                imglooplist:res.data[0].tabs
            })
            console.log(this.props);
        });

        axios.get("/4/tab/category_product_list.json?category_id=5&sort=1&from_id=0&city_id=140&page=0").then(res=>{
            console.log(res.data);
            this.setState({
                hotpotlist:res.data
            })
        })
    }
    render(){
       return <div className="home">
            <ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:2000}} key={this.state.looplist.length}>
            {
                this.state.imglooplist.map(item=>
                    <img src={item.url} key={item.id} alt="home"/>
                )
            }
            </ReactSwipe>
            <header>
                {
                    this.state.looplist.map(item=>
                        <div className="a">
                            <div className="title">
                            <h3>{item.group_section.title}</h3>
                            <p>{item.group_section.desc}</p>  
                            </div>
                            {
                               item.tabs.map(item=>
                                    <dl onClick={this.handleClick.bind(this,item.id)}>
                                    <dt><img src={item.url} key={item.id} alt="home"/></dt>
                                    <dd>
                                        <p>{item.title}</p>
                                        <p>{item.desc}</p>  
                                    </dd>
                                </dl>
                                    )
                            }
                        </div>
                        )
                }
                {
                this.state.hotpotlist.map(item=>
                    <dl key={item.product_id} onClick={this.handleClick1.bind(this,item.product_id)}>
                    </dl>
                    
                    )
            } 
            </header>
            
       </div>
    }
    handleClick(id){
        console.log(this.props)
        this.props.history.push("/homedetail/" + id);
    }
    handleClick1(id){
        console.log(this.props)
        this.props.history.push("/homedetail/" + id);
    }
    
}


export default Home;