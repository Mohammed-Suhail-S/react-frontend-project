export default function ListPoint(props) {

    const data = props.myvalue; 
    const result = data.map((listofvalues, index) => <li>{index + 1} {listofvalues}</li>); 
    let arr = ["html","css","bootstrap","javascript"];
    let res = arr.map((value) => <p>{value}</p>)

    return (

        <>
            <ul>{result}</ul>
            <div style={{marginLeft: '25px'}}>{res}</div>
        </>

    )

} 