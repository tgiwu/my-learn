import React, {Component} from 'react';

class NameForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <label>
                Name:
                <input type="text" onChange={this.props.onChange}/>
            </label>
        )
    }
}

class EssayForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <label>
                Essay:
                <textarea onChange={this.props.onChange}/>
            </label>
        )
    }
}

class Forms extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEssayChange = this.handleEssayChange.bind(this)
        this.state = {name: '', essay: ''}
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name)
        event.preventDefault()
    }

    handleNameChange(event) {
        this.setState({name: event.target.value.toUpperCase()})
        console.info('name ', this.state.name)
    }
    handleEssayChange(event) {
        this.setState({essay: event.target.value})
        console.info('essay ', this.state.essay)
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <NameForm onChange={this.handleNameChange}/>
                    <EssayForm onChange={this.handleEssayChange}/>
                </form>
            </div>
        )
    }
}

export default Forms