import React from "react";

export default class LifeCycle extends React.Component{
    constructor() {
        super()
        this.state = {value: "Welcome to ", name: "Frontend"};
    }

    componentWillMount() {
        alert("Welcome to our React Page");
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({name: "React JS"});
        },5000)
    }

    componentWillUpdate() {
        alert("This page is updating");
    }

    componentDidUpdate() {
        setTimeout(() => {
            document.getElementById('element').innerHTML = "The new value is updated successfully " + this.state.name;
        },2000)
    }

    render() {
        return (
            <>
                <h1>{this.state.value}{this.state.name}</h1>
                <h2 id="element" style={{marginLeft: '20px'}}>Loading...</h2>
            </>
        )
    }
}
