import { useEffect, useState } from "react";

const ApiEight = () => {
    let [alluser, setUser] = useState([]);

    const getUser = () => {
        fetch("http://localhost:1234/userlist")
            .then(response => response.json())
            .then(userArray => {
                setUser(userArray);
            })
    }

    useEffect(() => {
        getUser();
    }, []);

    let[username, setUname] = useState("");
    let[usermobile, setMobile] = useState("");
    let[usercity, setCity] = useState("");

    const save = () => {
        if (userid != "") {
            updateUser();
        } else {
        let url = "http://localhost:1234/userlist"
        let newuser = { uname: username, mobile: usermobile, city: usercity }
        let postData ={
            headers:{'content-Type':'application/json'},
            method:"post",
            body: JSON . stringify(newuser)
        }
        fetch(url, postData)
        .then(response=>response.json())
        .then(userinfo=>{
            alert(username + "- Saved Successfully");
            getUser();// reload emplist
            setUname("");
            setMobile("");
            setCity("");
        })
    }
    }
    const delUser =(id) =>{
        let url = "http://localhost:1234/userlist/" + id;
        let postData ={method:"delete"};
        fetch(url, postData)
        .then(response=>response.json())
        .then(userinfo=>{
            alert(userinfo.uname + "- Deleted Successfully !");
            getUser();
        })
    }
    let [userid, setUserid] = useState("");
    const EditUser = (user) =>{
        setUserid(user.id);
        setUname(user.uname);
        setMobile(user.mobile);
        setCity(user.city);
    }
    const updateUser = () =>{
        let url = "http://localhost:1234/userlist/"+userid;
        let newuser = { uname: username, mobile: usermobile, city: usercity }
        let postData ={
            headers:{'content-Type':'application/json'},
            method:"put",
            body: JSON . stringify(newuser)
        }
        fetch(url, postData)
        .then(response=>response.json())
        .then(userinfo=>{
            alert(username + "- Updated Successfully");
            getUser();
            setUname("");
            setMobile("");
            setCity("");
            setUserid("");
        })
    }
    return (
        <section>
            <h1> User List </h1>
            <table align="left" cellPadding="15">
                <tbody>
                    <tr>
                        <td> User Name : </td>
                        <td> <input type="text" onChange={event =>setUname(event.target.value)} value={username}/> </td>
                    </tr>
                    <tr>
                        <td>  Mobile No : </td>
                        <td> <input type="text"onChange={event =>setMobile(event.target.value)} value={usermobile}/> </td>
                    </tr>
                    <tr>
                        <td> City : </td>
                        <td> <input type="text" onChange={event =>setCity(event.target.value)} value={usercity}/> </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center">
                        <button  onClick={save}> Save </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table align="right" cellPadding="15">
                <thead>
                    <tr>
                        <th> SL No </th>
                        <th> User ID </th>
                        <th> User Name </th>
                        <th> Mobile No </th>
                        <th> City </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alluser.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {user.id} </td>
                                    <td> {user.uname} </td>
                                    <td> {user.mobile} </td>
                                    <td> {user.city} </td>
                                    <td> <button onClick={obj=>EditUser(user)}> Edit </button> </td>
                                    <td> <button onClick={obj => delUser(user.id)}> Delete </button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
export default ApiEight;