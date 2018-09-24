import React, { Component } from 'react';

class Contant extends Component{
    constructor(){
        super();
        this.state={
            name:"Like",
            count:0
        }
    }
    render(){
        setTimeout(() => {
            this.setState({name:"Unlike"});
        }, 1000);
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

export default Contant;