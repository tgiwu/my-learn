import React, { Component } from 'react';
import './App.css'

class Square extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    render() {
        return (
            <div>
                <h1>hello world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Square