import { useState } from "react"; 

const HookThree = () =>{
    let[userlist, updateUser] = useState( [] );

    let[newuser, setUser] = useState("Ramesh Kumar");
    
    const save = () =>{
        updateUser(userlist => [...userlist, newuser]) //a = a+b
        // ... it is called spread function
        setUser("");
    } 

    const delitem = (index) =>{
        userlist.splice(index, 1); //delete an element from given position
        updateUser( userlist =>[...userlist] ); //update available element in state so the list will reload
    }
    
    return(
        <section>
            <h1> State Management Using useState() </h1>
            <p> Total User  : {userlist.length} -{newuser} </p>

            <p>
            Enter Full Name : <input type="text" value={newuser} onChange={event=> setUser(event.target.value)}/>
            <button onClick={save}> Save </button>
            </p>

            {
                userlist.map((fullname, index)=>{
                    return(
                        <p key={index} className="four">
                             { fullname }
                             <br/>
                             <button onClick={ event=>delitem(index) }> Delete</button> 
                        </p>
                    )
                })
            }
        </section>
    );
}

export default HookThree;