import { createContext, useContext, useState } from "react";

const User = createContext();

export default function Context() {

    const [send] = useState('React');

    return (
        <>
            <User.Provider value={send}>
                <h1>Component 1</h1>
                <h2>{`Sendng to Component5 ${send}`}</h2>
                <Component2/>
            </User.Provider>
        </>
    )

}

function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3/>
        </>
    )
}

function Component3() {
    return (
        <>
            <h1>Component 3</h1>
            <Component4/>
        </>
    )
}

function Component4() {
    return (
        <>
            <h1>Component 4</h1>
            <Component5/>
        </>
    )
}

function Component5() {
    const receive = useContext(User);
    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Receiving from Component1 ${receive}`}</h2>
        </>
    )
}
