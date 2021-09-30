import React,{useState, useEffect} from 'react'


const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [count, setCount] = useState(0)
    const [viewer, setViewer] =useState(0)

   // const viewer = 2
    // const counter = 2

    useEffect(()=>{
    
        setInterval(()=>{
          setCount(count=>count +1)
        }, 1000)
    }, [])
    
    return(<div
    style={{
        width: "100%",
        backgroundColor: "pink",
        height: "100vh",
        fontSize: "50px",
        justifyContent: "center",
        alignItems: "center",
        color: "blue",
        display: 'flex',
        flexDirection: "column"
}}
>
    <div>Hello Diamond</div>
    <div>{counter}</div>
    <div>{viewer}</div>
    <div>{count%10}</div>
    <button
    onClick={() => {
       setCounter(counter + 1)
       setViewer(viewer + 2)
   }} 
    >Press Me</button>
    </div>)
}    

export default Counter;
    
