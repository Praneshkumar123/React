import { useState } from "react";


const HookOne = () =>{
    let city = ['Banglore', 'Mumbai'];
    const[a, b] = city; // array de-structure 

    console.log(useState()); // [ undefined, f()]
    let [x, y]= useState(1000); // [ 1000, f()]

    let [message, updateMessage] = useState("");
    const one = ()=>{
        y( x + 1 );
        updateMessage("Increasing the value...")
    }

    const two = ()=>{
        y( x - 1 );
        updateMessage("Sorry its going down...")
    }
    
    let [booklist , updateBook] = useState(['Html', 'CSS', 'Bootsrap','Javascript', 'Node JS','React']);


        return(
            <section>
                <h1> How to use useState() for state management </h1>
                <p> {city[0]} </p>
                <p> {city[1]} </p>
                <p> {a} and {b} </p>

                <p> { x } </p>

                <p> { message }</p>

                <button onClick={one}> + By 1 </button> 
                <button onClick={two}> - By 1 </button>
                <h2> Available Book: {booklist.length}</h2>
                {
                    booklist.map((bookname, index)=>{
                        return(
                            <p key={index}> {bookname} </p>
                        )
                    })
                }

            </section>
        )
}

export default HookOne;