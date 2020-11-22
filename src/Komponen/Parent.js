import {Component} from "react";
import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

class Parent extends Component{
 state = {
     gantiPraktikan : true
}
ubahPraktikan = () => {
     this.setState((state) => {
         return {gantiPraktikan : !this.state.gantiPraktikan}
        })
}
render() {
     return (
     <div> 
         {this.state.gantiPraktikan ? <Child1/> : <Child2/>}
         <button
         onClick={this.ubahPraktikan}>{this.state.gantiPraktikan ?
         'Praktikan 2' : 'Praktikan 1'}</button>
     </div>
     );
    }
}
export default Parent;