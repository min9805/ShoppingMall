import React, { Component } from 'react';

class footer extends Component{
    render(){
        return (
        <h1>{this.props.footerMessage}</h1>
        );
    }
}

export default footer;