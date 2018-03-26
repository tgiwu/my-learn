import React, {Component} from 'react';

class HandingEvents extends Component {
    constructor(props) {
        super(props)
        //This binding is necessary to make 'this' work in the callback
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    // handleClick2 = () => {
    //     console.info('experimental function')
    // }

    handleClick(e, id) {
        e.preventDefault()
        if (id) {
            console.info('with id ' + id)
        } else {
            console.info('The link was clicked')
        }
    }
    handleClickWithBindId(id, context) {
        context.preventDefault()
        console.info('context', context)
        console.info('with bind id ', id)
    }

    render() {
        return (
            <div>
                <li><a href="#" onClick={this.handleClick}>class binding handleClick</a></li>
                <li><a href="#" onClick={(e) => this.handleClick(e, 1)}>handleClick with argument</a></li>
                <li><a href="#" onClick={this.handleClickWithBindId.bind(this, 2)}>handleClick with argument by bind</a></li>
            </div>
        )
    }
}

export default HandingEvents