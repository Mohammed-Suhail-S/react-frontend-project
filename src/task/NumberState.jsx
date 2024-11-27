import React from "react";

export default class NumberState extends React.Component {

    constructor() {
        super();
        this.state={currentvalue: 0}
    }

    increment = () => {
        this.setState({currentvalue: this.state.currentvalue +1})
    }

    decrement = () => {
        this.setState({currentvalue: this.state.currentvalue -1})
    }

    restart = () => {
        this.setState({currentvalue: 0})
    }

    render() {
        return (
            <>
                <h1 style={{textAlign: 'center', marginTop: '50px'}}>{this.state.currentvalue}</h1>
                <button style={{padding: '12px', borderRadius: '8px', marginLeft: '640px', fontWeight: 'bold', backgroundColor: 'lime'}} 
                onClick={this.increment}>Increment</button>
                <button style={{padding: '12px', borderRadius: '8px', marginLeft: '40px', fontWeight: 'bold', color: 'white', backgroundColor: 'red'}} 
                onClick={this.decrement}>Decrement</button>
                <button style={{padding: '12px', borderRadius: '8px', marginLeft: '40px', fontWeight: 'bold', color: 'white', backgroundColor: 'blue'}} 
                onClick={this.restart}>Restart</button>
            </>
        )
    }

}
