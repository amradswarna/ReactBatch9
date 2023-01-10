import React from "react";
class Child extends React.Component{
    render(){
        return(
            <div>
                <h2>Hello Team</h2>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}
export default Child;