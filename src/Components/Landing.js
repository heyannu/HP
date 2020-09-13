import React, { Component } from 'react';
export default class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }


    handleResize = (e) => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };


    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    render() {
        return (
            <div>
                <div style={{ height: (this.state.height/2), width: this.state.width, background: 'red' }}>

                </div>
                <div style={{ height: (this.state.height/2), width: this.state.width, background: 'white' }}>
                </div>
            </div>
        );
    }
}

