import { useState } from "react";

const HookFour = () =>{
    let[myname, setName] = useState("?");
    let[mymobile, setMobile] = useState("0");
    let[myemail, setEmail] = useState("?");
    let[myeducation, setEducation] = useState("?");
    let[myadress, setAdress] = useState("?");


    return(
        <section>
            <h1> React Input and Output </h1>

            <table cellPadding="15">
                <tbody>
                    <tr>
                        <td> Full Name </td>
                        <td><input type="text" onChange={event=>setName(event.target.value)}/></td>
                        <td>{myname} </td>
                    </tr>

                    <tr>
                        <td> Mobile No </td>
                        <td><input type="number" onChange={event=>setMobile(event.target.value)}/></td>
                        <td> {mymobile} </td>
                    </tr>

                    <tr>
                        <td> E-mail Id </td>
                        <td><input type="text" onChange={event=>setEmail(event.target.value)}/></td>
                        <td> {myemail} </td>
                    </tr>

                    <tr>
                        <td> Education </td>
                        <td><input type="text" onChange={event=>setEducation(event.target.value)}/></td>
                        <td> {myeducation} </td>
                    </tr>

                    <tr>
                        <td> Adress </td>
                        <td><textarea type="text" onChange={event=>setAdress(event.target.value)}></textarea> </td>
                        <td> {myadress} </td>
                    </tr>

                </tbody>
            </table>
        </section>
    )
}

export default HookFour;