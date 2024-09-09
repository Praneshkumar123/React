import { useEffect, useState } from "react";

const ApiFive = () =>{
    let[todolist, setTodo] = useState([]);

    const gettodo = () =>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(todoArray =>{
            setTodo(todoArray);
        })
    }

    useEffect(()=>{
        gettodo();
    },[]);

    let [keyword, setKeyword] = useState("");

    return(
        <section>
            <h1> Recent Todos : {todolist.length} </h1>
            {keyword}
            <p align="center">Search : <input type="text" onChange={obj=>setKeyword(obj.target.value)} /></p>
            {
                todolist.map((todos, index)=>{
                    if( todos.title.toLowerCase().match( keyword.toLowerCase() ) )

                    return(
                        <div key={index} className="two"> 
                            <p> {todos.userId} </p>
                            <p><b> {todos.id}</b> </p>
                            <h3> {todos.title} </h3>
                            <p><font color="green">{todos.completed ? "true ":"false"}</font>  </p>
                        </div>
                    )
                })
            }
        </section>
    )

}
export default ApiFive; 