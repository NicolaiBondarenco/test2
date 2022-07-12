import React, { Component } from "react";

import './error-endicator.css';

export default class ErrorEndicator extends Component{

    state = {
        error: false
    }

    render(){

        if(this.state.error){
            this.foo.bar = 0;
        }

        return(
            <button className="btn btn-warning"
                    onClick={() => this.setState({error: true})} >
                    Throw Error
            </button>
        )
    }
}