import React, {Component} from 'react';

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}

class WelcomeDialog extends Component{
    constructor(props) {
        super(props)
        this.state = {login: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
    }

    handleChange(event) {
        this.setState({login: event.target.value})
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}`)
    }

    render() {
        return (
            <Dialog title='Welcome' message='Thank you for visiting our spacecraft !!!'>
                <input value={this.state.login} onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}></button>
            </Dialog>
        )
    }
}

class CompositionVSInheritance extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            <WelcomeDialog/>
            </div>
        )
    }
}

export default CompositionVSInheritance