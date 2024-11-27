import { useState ,useEffect } from "react";

export default function Effect() {

    const [user,setUser] = useState('React');

    useEffect(() => { 
        setTimeout(() => {
            console.log('welcome');
        },2000)
    },[])

    function changeName () {
        setUser('JavaScript');
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [value,setValue] = useState('React')
    const [data,setData] = useState('Django')

    useEffect(() => {
        setTimeout(() => {
            console.log("hello");
        },3000)
    },[value]) 

    const FixName = () => {
        setValue('JS');
    }
    const updateName = () =>{
        setData('Python');
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const sampleData = [
        {name : "arjun", age :4, location: 'chennai'},
        {name : "bharathi", age :2, location: 'chennai'}
    ]

    const [datas,setDatas] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setDatas(sampleData);
        },3000)
    })

    return (
        <>
            <h1>{user}</h1>
            <button style={{marginLeft: '20px'}} onClick={changeName}>Change</button>

            <h3>{value}</h3>
            <h4>{data}</h4>
            <button onClick = {FixName}>FixName</button>
            <button onClick = {updateName}>UpdateName</button>

            <table>

                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Location</th>
                </tr>

            {datas.length === 0 && <td>Loading....</td>}
            {datas.map((dat) => (

                <tr>   
                    <td>{dat.name}</td>
                    <td>{dat.age}</td>
                    <td>{dat.location}</td>
                </tr>             
                        
            ))}

            </table>
        </>
    )

}
