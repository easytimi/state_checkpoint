//import logo from './logo.svg';
import React from 'react';
import {Component} from 'react';
import './App.css';
import Display from './component/Display';

class App extends Component {
 state={
    person:
      {
        fullName:'ADENIGBA EZEKIEL ROTIMI',
        bio:'5ft9inches tall,dark in complexion,weigh 180 pounds',
        imgSrc:<img  style={{height:"180px", width:"180px"}}src={require(`./asset/pexels-photo-4560080.webp`)} alt="photos"/>,
        proFession:'full stack web developer',
        show:true,
        time:0
    }
  
  };
  componentDidMount(){
    setInterval(()=>this.setState({time:this.state.person.time++}),1000)
} 
  

   handleAppear = ()=>this.setState({person:this.state.person.show === false?{...this.state.person,show:true}:{...this.state.person,show:false}})
  render(){
          return (
            <div className="App">
              <Display profile={this.state.person} />
               <div className="btn"><button onClick={()=>this.handleAppear()}>{this.state.person.show?"hidestate":"showstate"}</button></div> 
             </div>
          );
  };
}

export default App;
