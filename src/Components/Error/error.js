import React, { Component } from 'react';
import Header from '../Header/header.js'
import './error.css'
export default class Errorr extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            open: true
        }
    }
    render() {
        
        return (
            <div className="error">
                <Header />
            </div>
        );
    };
}