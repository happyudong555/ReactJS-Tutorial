import React, { Component } from 'react';

class Contant extends Component{
    render(){
        return (
            <div>
                Hello From Contant <br />
                Name : {this.props.name} <br />
                Title : {this.props.title} <br />
            </div>
        );
    }
}

export default Contant;