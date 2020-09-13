import React, { useState, Component } from 'react';
import Header from '../Header/header.js'
import './error.css'
import error from '../../Assets/Images/error.gif'
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