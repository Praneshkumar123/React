import { useState } from "react";


const HookOne = () =>{
    let[myname, setName] = useState("?");
    let[myemail, setEmail] = useState("?");
    let[mymobile, setMobile] = useState(0);
    let[myskills, setSkills] = useState("?");

    return(
        <>
        <h1> Assignment 1 </h1>
        <fieldset>
            <legend> Enter Your Data </legend>
            <table cellPadding="15">
                <tr>
                    <th> Name </th>
                    <td> <input type="text" onChange={event=>setName(event.target.value)}/> </td>
                </tr>
                <tr>
                    <th> E-mail </th>
                    <td> <input type="text" onChange={event=>setEmail(event.target.value)}/> </td>
                </tr>
                <tr>
                    <th> Mobile </th>
                    <td> <input type="text" onChange={event=>setMobile(event.target.value)}/> </td>
                </tr>
                <tr>
                    <th> Skills </th>
                    <td> <textarea type="text" onChange={event=>setSkills(event.target.value)}/> </td>
                </tr>
            </table>
        </fieldset>
       
        
        <fieldset>
            <legend> Personal Details </legend>
            <table cellPadding="10">
                <tr>
                    <th> Your Name :  {myname} </th>
                </tr>
                <tr>
                    <th> E-mail Id : {myemail} </th>
                </tr>
                <tr>
                    <th> Mobile No : {mymobile} </th>
                </tr>
            </table>
        </fieldset>
        <div className="box1">
        <fieldset>
            <legend> My Skills </legend>
            <table cellPadding="10">
                <tr>
                    <th> {myskills} </th>
                </tr>
            </table>
        </fieldset>
        </div>
        </>
    )

}

export default HookOne;