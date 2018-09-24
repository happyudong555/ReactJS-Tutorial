import React, { Component } from 'react';

class Contant extends Component{
    constructor(){
        super();
        this.state={
            name:""
        }
    }
    Change(event){
        this.setState({name:event.target.value})
    }
    render(){
        return (
            <div>
                <input type="text" onChange={this.Change.bind(this)}/>  
                <h2>{this.state.name}</h2>
            </div>
        );
    }
}

export default Contant;