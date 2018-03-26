import React, {Component} from 'react';

function UserGreeting(props) {
    return <h1>Welcome back !</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up</h1>
}

function Greeting(props) {
    const isLoggedIn2 = props.isLoggedIn
    if (isLoggedIn2) {
        return <UserGreeting/>
    }
    return <GuestGreeting/>
}

function LoginButton(props) {
    return (<button onClick={props.onclick} >Login</button>)
}

function LogoutButton(props) {
    return(<button type="button" onClick={props.onclick} >Logout</button>)
}

function WarningBanner(props) {
    if (!props.warn) {
        return null
    }
    return (<div className="warning">Warning</div>)
}

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.handleToggleClick = this.handleToggleClick.bind(this)
        this.state = {
            isLoggedIn: false,
            showWarning: true}
    }

    handleLoginClick() {
        console.info('click login')
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick() {
        console.info('click logout')
        this.setState({isLoggedIn: false})
    }

    handleToggleClick() {
        this.setState(preState => ({showWarning: !preState.showWarning}))
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        const messages = ['React', 'Re:React', 'Re:Re:React']
        console.info('render ')
        const button = isLoggedIn ? (<LogoutButton onclick={this.handleLogoutClick}/>) : (<LoginButton onclick={this.handleLoginClick}/>)
        const message = messages.length > 0 && (<h2>You have {messages.length} unread message</h2>)
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
                {message}
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>{this.state.showWarning ? 'Hide' : 'Show'}</button>
            </div>
        )
    }
}

export default ConditionalRendering