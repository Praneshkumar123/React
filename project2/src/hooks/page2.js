import { useState } from "react";

const HookTwo = () =>{
    let[userlist, updateUser] = useState( [] );

    let[newuser, setUser] = useState("");
    
    const save = () =>{
        updateUser(userlist => [...userlist, newuser])
        setUser("");
    } 

    return(
        <section align="center">
            <h1> Assignment 2 </h1>
            <p>
            <input type="text" value={newuser} onChange={event=> setUser(event.target.value)} size="50"/><br/><br/>
            <button onClick={save}> Go </button>
            </p>

            {
                userlist.map((fullname, index)=>{
                    return(
                        <p key={index}>
                             { fullname } - {fullname.length}
                        </p>
                    )
                })
            }
        </section>
    );
}

export default HookTwo;