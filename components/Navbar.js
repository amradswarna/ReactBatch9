import React from "react";
import Child from "./Child";
class Navbar extends React.Component{
    state={
        name:"swarna"
    }
    render(){
        return(
            <div>
                <h1>Class Based Component</h1>
                <Child name={this.state.name} />
            </div>
        )
    }
}
export default Navbar;