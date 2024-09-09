import { useState } from "react";

const HookTwo = () =>{

    let[userlist, updateUser] = useState([]);

    const save = ()=>{
        let newuser = prompt("Enter Any Name ");
        updateUser(userlist => [...userlist, newuser]); // a = a+b 
    }

    return(
        <section>
            <h1> State Management Using useState() </h1>
            <p> Total User : { userlist.length}</p>

            <button onClick={save}> Save </button>

            {
                    userlist.map((fullname, index)=>{
                        return(
                            <p key={index} className="four"> {fullname} </p>
                        )
                    })
            }
        </section>
    )  
}
export default HookTwo;