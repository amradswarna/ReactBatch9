import React from "react";
class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            count:0,
            name:"swarna",
            age:30
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    
    }
    increment(){
        this.setState( value=> ({
            count: value.count + 2,
        }));
    }
    decrement(){
        this.setState( value=> ({
           count:value.count -3,
        }));
    }
    
    render(){
        return(
          <div>
            <h1>{this.state.count}</h1>
            <h1>{this.state.name}</h1>
            <div>{this.state.age}</div>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
          </div>
        )

    }
}
export default Counter;