import { useEffect, useState } from "react";

const ApiOne = () => {
    let [allreg, setReg] = useState([]);

    const getReg = () => {
        fetch("http://localhost:1234/registerlist")
            .then(response => response.json())
            .then(regArray => {
                setReg(regArray);
            })
    }
    useEffect(() => {
        getReg();
    }, []);

    let [regfname, setFname] = useState("");
    let [reglname, setLname] = useState("");
    let [regmobile, setMobile] = useState("");
    let [regemail, setEmail] = useState("");
    let [regpassword, setPassword] = useState("");
    let [regcpassword, setCpassword] = useState("");
    let [regdob, setDob] = useState("");
    let [regaddress, setAddress] = useState("");
    let [regpincode, setPincode] = useState("");
    let [regstate, setState] = useState("");
    let [regdistrict, setDistrict] = useState("");

    const save = () => {
        if (regid != "") {
            updateReg();
        } else {
            let url = "http://localhost:1234/registerlist";
            let newreg = {
                fname: regfname, lname: reglname, mobile: regmobile, email: regemail,
                password: regpassword, cpassword: regcpassword, dob: regdob, address: regaddress, pincode: regpincode, state: regstate, district: regdistrict
            };
            let postData = {
                headers: { 'content-Type': 'application/json' },
                method: "post",
                body: JSON.stringify(newreg)
            }
            fetch(url, postData)
                .then(response => response.json())
                .then(reginfo => {
                    alert(regfname + " - Save Successfully !");
                    getReg();
                    setFname("");
                    setLname("");
                    setMobile("");
                    setEmail("");
                    setPassword("");
                    setCpassword("");
                    setDob("");
                    setAddress("");
                    setPincode("");
                    setState("");
                    setDistrict("");
                })
        }
    }
    const clear = () => {
        setFname("");
        setLname("");
        setMobile("");
        setEmail("");
        setPassword("");
        setCpassword("");
        setDob("");
        setAddress("");
        setPincode("");
        setState("");
        setDistrict("");
    }
    const delReg = (id) => {
        let url = "http://localhost:1234/registerlist/"+id;
        let postData = { method: "delete" };
        fetch(url, postData)
            .then(response => response.json())
            .then(reginfo => {
                alert(reginfo.fname + " - Deleted Successfully !");
                getReg();
         })
    }

    let [regid, setRegid] = useState("");
    const EditReg = (reg) => {
        setRegid(reg.id);
        setFname(reg.fname);
        setLname(reg.lname);
        setMobile(reg.mobile);
        setEmail(reg.email);
        setPassword(reg.password);
        setCpassword(reg.cpassword);
        setDob(reg.dob);
        setAddress(reg.address);
        setPincode(reg.pincode);
        setState(reg.state);
        setDistrict(reg.district);
    }

    const updateReg = () => {
        let url = "http://localhost:1234/registerlist/"+regid;
            let newreg = {
                fname: regfname, lname: reglname, mobile: regmobile, email: regemail,
                password: regpassword, cpassword: regcpassword, dob: regdob,
                address: regaddress, pincode: regpincode, state: regstate, district: regdistrict
            }
            let postData = {
                headers: { 'content-Type': 'application/json' },
                method: "put",
                body: JSON.stringify(newreg)
            }
            fetch(url, postData)
                .then(response => response.json())
                .then(reginfo => {
                    alert(regfname + " - Updated Successfully !");
                    getReg();
                    setFname("");
                    setLname("");
                    setMobile("");
                    setEmail("");
                    setPassword("");
                    setCpassword("");
                    setDob("");
                    setAddress("");
                    setPincode("");
                    setState("");
                    setDistrict("");
                    setRegid("");
                })
        }
    
    return (
        <section>
            <h1> Register Form </h1>
            <table align="left" cellPadding="10">
                <tr>
                    <td> Fullname : </td>
                    <td><input type="text" onChange={event => setFname(event.target.value)} value={regfname} /></td>
                </tr>
                <tr>
                    <td> Lastname : </td>
                    <td><input type="text" onChange={event => setLname(event.target.value)} value={reglname} /></td>
                </tr>
                <tr>
                    <td> Mobile No : </td>
                    <td><input type="text" onChange={event => setMobile(event.target.value)} value={regmobile} /></td>
                </tr>
                <tr>
                    <td> Email ID : </td>
                    <td><input type="text" onChange={event => setEmail(event.target.value)} value={regemail} /></td>
                </tr>
                <tr>
                    <td> Password : </td>
                    <td><input type="text" onChange={event => setPassword(event.target.value)} value={regpassword} /></td>
                </tr>
                <tr>
                    <td> Confirm Password : </td>
                    <td><input type="text" onChange={event => setCpassword(event.target.value)} value={regcpassword} /></td>
                </tr>
                <tr>
                    <td> DOB : </td>
                    <td><input type="text" onChange={event => setDob(event.target.value)} value={regdob} /></td>
                </tr>
                <tr>
                    <td> Address : </td>
                    <td><textarea type="text" onChange={event => setAddress(event.target.value)} value={regaddress}></textarea></td>
                </tr>
                <tr>
                    <td> Pincode : </td>
                    <td><input type="text" onChange={event => setPincode(event.target.value)} value={regpincode} /></td>
                </tr>
                <tr>
                    <td> State : </td>
                    <td><input type="text" onChange={event => setState(event.target.value)} value={regstate} /></td>
                </tr>
                <tr>
                    <td> District : </td>
                    <td><input type="text" onChange={event => setDistrict(event.target.value)} value={regdistrict} /></td>
                </tr>
                <tr>
                    <td align="center" colSpan="2"> <input type="checkbox" /> Agree On Terms & Conditions </td>
                </tr>
                <tr>
                    <td align="center" colSpan="2"> <button onClick={save} > Register </button> <button onClick={clear}> Clear </button>  </td>
                </tr>
            </table>
            <table align="center" border="1" cellSpacing="0" cellPadding="5">
                <thead>
                    <tr>
                        <th> SL No </th>
                        <th> Fullname </th>
                        <th> Lastname </th>
                        <th> Mobile No </th>
                        <th> Email ID </th>
                        <th> Password </th>
                        <th> Confirm Password </th>
                        <th> DOB </th>
                        <th> Address </th>
                        <th> Pincode </th>
                        <th> State </th>
                        <th> District </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allreg.map((reg, index) => {
                            return (
                                <tr>
                                    <td> {index} </td>
                                    <td> {reg.fname} </td>
                                    <td> {reg.lname} </td>
                                    <td> {reg.mobile} </td>
                                    <td> {reg.email} </td>
                                    <td> {reg.password} </td>
                                    <td> {reg.cpassword} </td>
                                    <td> {reg.dob} </td>
                                    <td> {reg.address} </td>
                                    <td> {reg.pincode} </td>
                                    <td> {reg.state} </td>
                                    <td> {reg.district} </td>
                                    <td> <button onClick={obj => EditReg(reg)}> Edit </button> </td>
                                    <td> <button onClick={obj => delReg(reg.id)}> Delete </button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
export default ApiOne;