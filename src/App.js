import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShow:false
    }
  }
  render() {
    return (
      <div className="App">
      <Navbar event={()=>{
        this.setState({
          isShow:!this.state.isShow
        })
      }}/>

      {
        this.state.isShow?
        <Sidebar event={()=>{
          this.setState({
            isShow:!this.state.isShow
          })
        }}/>
        :null
      }
      

        {
          this.props.children
        }
      </div>
    );
  }
}

export default App;
