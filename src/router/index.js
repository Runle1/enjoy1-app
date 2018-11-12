import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import React from "react"; //必须引入可以解析jsx
import App from "../App"
import Home from "../components/Home"
import Hotpot from "../components/Hotpot"
import JapaneseFood from "../components/JapaneseFood"
import Western from "../components/Western"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Intelligentsorting from "../components/Western/Intelligentsorting"
import All from "../components/Western/All"
import Quanbu from "../components/JapaneseFood/Quanbu";
import Zhineng from "../components/JapaneseFood/Zhineng";
import Detail from "../components/Detail";
import HomeDetail from "../components/HomeDetail";

const router = (
    <Router>
        <App>   
                <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/hotpot" component={Hotpot}/>
                <Route path="/japaneseFood" render={()=>
                    <JapaneseFood>
                        <Switch>
                            <Route path="/japaneseFood/quanbu" component={Quanbu}></Route>
                            <Route path="/japaneseFood/zhineng" component={Zhineng}></Route>
                            <Redirect from="/japaneseFood" to="/japaneseFood/quanbu"/>
                        </Switch>
                    </JapaneseFood>
                }/>
                <Route path="/western" render={()=>
                    <Western>
                        <Switch>
                            <Route path="/western/intelligentsorting" component={Intelligentsorting}/>
                            <Route path="/western/all" component={All}/>
                            <Redirect from="/western" to="/western/all"/>
                        </Switch>
                    </Western>  
                }/>
                <Route path="/sidebar" component={Sidebar}/>
                <Route path="/navbar" component={Navbar}/>
                <Route path="/detail/:myid" component={Detail}></Route>
                <Route path="/homedetail/:homeid" component={HomeDetail}></Route>
                <Redirect from = "*" to="/home"/>
                </Switch>
        </App>
    </Router>
)

export default router;