import { useState } from "react";

const HookSix = () => {
    let [alluser, setUser] = useState([{ fullname: "Praneshkumar", age: "21 Years", edu: "B.sc(Chemistry)" },
    { fullname: "Yuvan Shankar", age: "23 Years", edu: "MBA" }
    ]);
    let [fname, pickName]= useState("");
    let [age, pickAge]= useState("");
    let [education, pickEdu]= useState("");

    let [message, UpdateMessage]= useState("");

    const save=()=>{
        let newuser = {fullname: fname, age: age , edu : education};
        setUser(alluser=>[...alluser, newuser]);
        UpdateMessage(fname  + "Saved Successfully ! ")
        pickName("");
        pickAge("");
        pickEdu("");
    }
    
    const deluser =(index)=>{
        alluser.splice(index, 1);
        setUser( alluser =>[...alluser] );
        UpdateMessage( "Recorded Data Deleted Successfully ! ")
    }
    return (
        <section>
            <h1> Array of object Save, List, Delete </h1>
            <p align="center" > {message} </p>
            <div align="center">
                <input type="text" placeholder="Enter FullName" className="smallinput" onChange={event=>pickName(event.target.value)} value={fname}/>
                <input type="text" placeholder="Enter Age" className="smallinput" onChange={event=>pickAge(event.target.value)} value={age} />
                <input type="text" placeholder="Enter Education" className="smallinput" onChange={event=>pickEdu(event.target.value)} value={education} />
                <button onClick={save}>Save</button>
            </div>
            <table align="center" cellPadding="12">
                <thead>
                    <tr>
                        <th> SL No</th>
                        <th> User Name </th>
                        <th> Age </th>
                        <th> Education </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alluser.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td> {index}</td>
                                    <td> {user.fullname} </td>
                                    <td> {user.age} </td>
                                    <td> {user.edu} </td>
                                    <td>
                                        <button onClick={event=>deluser(index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )

}

export default HookSix;