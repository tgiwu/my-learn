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

class FlavorForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <label>
                Pick your favorite la Croix flavor:
                <select onChange={this.props.onChange}>
                    <option value='grapefruit'>Grapefruit</option>
                    <option value='lime'>Lime</option>
                    <option value='coconut'>Coconut</option>
                    <option value='mango'>mango</option>
                </select>
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
        this.handleFlavorChange = this.handleFlavorChange.bind(this)
        this.state = {name: '', essay: '', flavor:''}
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

    handleFlavorChange(event) {
        this.setState({flavor: event.target.value})
    }

    componentDidMount() {}

    componentWillUnmount() {}
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <NameForm onChange={this.handleNameChange}/>
                    <EssayForm onChange={this.handleEssayChange}/>
                    <FlavorForm onChange={this.handleFlavorChange}/>
                </form>
            </div>
        )
    }
}

export default Forms