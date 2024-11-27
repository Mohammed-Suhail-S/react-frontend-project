export default function List2(props) {

    const datas = props.data;
    const res = datas.map((ans) => <li>{ans}</li>);   
    console.log(res);

    return (
        <>
            <h1>This is Component 2</h1>
            <ul>{res}</ul>  
        </>
    )

} 