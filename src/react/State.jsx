import React from "react";

export default class State extends React.Component {

    constructor() {
        super();
        this.state={initialvalue: "Hello", name: "Mohammed Suhail"}
    }

    valueChange = () => {
        this.setState({initialvalue: "Thank You"})
    }

    render() {
        return (
            <>
                <h1>{this.state.initialvalue}<span> </span>{this.state.name}</h1>
                <button style={{marginLeft: '25px', padding: '10px'}} onClick={this.valueChange}>Change</button>
            </>
        )
    }
   
}
