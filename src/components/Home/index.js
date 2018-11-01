import React ,{Component} from "react";
import ReactSwipe from 'react-swipe';
import axios from "axios"
import "./index.scss"
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            looplist:[],
            imglooplist:[]
        }
    }
    componentDidMount(){
        axios.get("/hub/home/v1/web/week_choice.json?city_id=140&page=0").then(res=>{
            console.log(res.data);
            console.log(res.data[0]);
            console.log(res.data[0].tabs);
            this.setState({
                looplist:res.data,
                imglooplist:res.data[0].tabs
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
                                this.state.imglooplist.map(item=>
                                    <dl>
                                    <dt><img src={item.url} key={item.id} alt="home"/></dt>
                                    <dd>
                                        <p>{item.title}</p>
                                        <p>{item.desc}</p>  
                                    </dd>
                                </dl>
                                    )
                            }1
                        </div>
                        )
                }
            </header>
            
       </div>
    }
}


export default Home;