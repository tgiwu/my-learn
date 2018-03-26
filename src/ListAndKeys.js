import React, {Component} from 'react';

function Item(props) {
    return <li >{props.num}</li>
}

function ListItem(props) {
    return props.numbers.map((it) => <Item key={it} num={it * it}/>)
}

class ListAndKeys extends Component {
    constructor(props) {
        super(props)
        const seeds = [1, 2, 3, 4, 5]
        this.state = {seeds : seeds}
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div>
               <ListItem numbers = {this.state.seeds}/>

                {this.state.seeds.map((seed) => <Item key={seed} num={seed}/>)}
            </div>
        )
    }
}

export default ListAndKeys