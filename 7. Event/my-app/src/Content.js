import React, { Component } from 'react';

class Contant extends Component{
    constructor(){
        super();
        this.state={
            name:"Like",
            count:0
        }
        this.click = this.click.bind(this);
    }
    click(){
        this.setState({name:"Unlike"});
    }
    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.click}>{this.state.name}</button>
            </div>
        );
    }
}

export default Contant;