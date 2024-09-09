import { useState, useEffect } from "react";

const ApiTwo = () => {
    let [allparent, setParent] = useState([]);

    const getParent = () => {
        fetch("http://localhost:1234/parentlist")
            .then(response => response.json())
            .then(parentArray => {
                setParent(parentArray);
            })
    }

    useEffect(() => {
        getParent();
    }, [])

    let [fathername, setFathername] = useState("");
    let [mothername, setMothername] = useState("");
    let [mobile, setMobile] = useState("");
    let [adhar, setAdhar] = useState("");
    let [religion, setReligion] = useState("");
    let [caste, setCaste] = useState("");
    let [occupation, setOccupation] = useState("");
    let [proof, setProof] = useState("");
    let [address, setAddress] = useState("");

    const save = () => {
        if (parentid != "") {
            updateParent();
        } else {
            let url = "http://localhost:1234/parentlist"
            let newparent = { fathername: fathername, mothername: mothername, mobile: mobile, adhar: adhar, religion: religion, caste: caste, occupation: occupation, proof: proof, address: address };
            let postData = {
                headers: { 'Content-type': 'appliction/json' },
                method: "post",
                body: JSON.stringify(newparent)
            }
            fetch(url, postData)
                .then(response => response.json())
                .then(parentinfo => {
                    alert(fathername + " - Save Successfully !")
                    getParent();
                    setFathername("");
                    setMothername("");
                    setMobile("");
                    setAdhar("");
                    setReligion("");
                    setCaste("");
                    setOccupation("");
                    setProof("");
                    setAddress("");
                })
        }
    }
    const clear = () => {
        setFathername("");
        setMothername("");
        setMobile("");
        setAdhar("");
        setReligion("");
        setCaste("");
        setOccupation("");
        setProof("");
        setAddress("");
    }

    const delParent = (id) => {
        let url = "http://localhost:1234/parentlist/" + id;
        let postData = { method: "delete" }
        fetch(url, postData)
            .then(response => response.json())
            .then(parentinfo => {
                alert(parentinfo.fathername + " - Deleted Successfully !")
                getParent();
            })
    }

    let [parentid, setParentid] = useState("");
     
    const EditParent = (parent) => {
        setParentid(parent.id);
        setFathername(parent.fathername);
        setMothername(parent.mothername);
        setMobile(parent.mobile);
        setAdhar(parent.adhar);
        setReligion(parent.religion);
        setCaste(parent.caste);
        setOccupation(parent.occupation);
        setProof(parent.proof);
        setAddress(parent.address);
    }

    const updateParent = () => {
        let url = "http://localhost:1234/parentlist/" + parentid;
        let newparent = {
            fathername: fathername, mothername: mothername, mobile: mobile, adhar: adhar,
            religion: religion, caste: caste, occupation: occupation, proof: proof, address: address
        }
        let postData = {
            headers: { 'Content-type': 'appliction/json' },
            method: "put",
            body: JSON.stringify(newparent)
        }
        fetch(url, postData)
            .then(response => response.json())
            .then(parentinfo => {
                alert(fathername + " - Update Successfully !");
                getParent();
                setFathername("");
                setMothername("");
                setMobile("");
                setAdhar("");
                setReligion("");
                setCaste("");
                setOccupation("");
                setProof("");
                setAddress("");
                setParentid("");
            });
    }

    return (
        <section>
            <h1> Parent parent </h1>
            <table align="center" cellPadding="15">
                <tr>
                    <td> Father Name * </td>
                    <td><input type="text" onChange={obj => setFathername(obj.target.value)} value={fathername} /></td>
                    <td> Mother Name * </td>
                    <td><input type="text" onChange={obj => setMothername(obj.target.value)} value={mothername} /></td>
                </tr>
                <tr>
                    <td> Mobile No * </td>
                    <td><input type="text" onChange={obj => setMobile(obj.target.value)} value={mobile} /></td>
                    <td> Adhar No * </td>
                    <td><input type="text" onChange={obj => setAdhar(obj.target.value)} value={adhar} /></td>
                </tr>
                <tr>
                    <td> Religion </td>
                    <td><input type="text" onChange={obj => setReligion(obj.target.value)} value={religion} /></td>
                    <td> Caste </td>
                    <td><input type="text" onChange={obj => setCaste(obj.target.value)} value={caste} /></td>
                </tr>
                <tr>
                    <td className="parent1"> Parent Occupation </td>
                    <td><input className="parent2" type="text" onChange={obj => setOccupation(obj.target.value)} value={occupation} /></td> 
                    <td> Any Id Proof No </td>
                    <td><input className="parent2" type="text" onChange={obj => setProof(obj.target.value)} value={proof} /></td>   
                </tr>
                <tr>
                    <td> Address *</td>
                    <td colSpan="5" align="center"><textarea type="text" className="textBox" onChange={obj => setAddress(obj.target.value)} value={address}></textarea></td>
                </tr>

                <tr>
                    <td colSpan="2" align="center"><button onClick={save}> Save </button> <button onClick={clear}>Clear</button></td>
                </tr>
            </table>

            <table align="right" border="1" cellPadding="15" cellSpacing="0">
                <tr>
                    <th> SI No </th>
                    <th> Father Name </th>
                    <th> Mother Name </th>
                    <th> Mobile No </th>
                    <th> Adhar No </th>
                    <th> Religion</th>
                    <th> Caste </th>
                    <th> Prarent Occupation </th>
                    <th> Any Id Proof No</th>
                    <th> Address </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
                {
                    allparent.map((parent, index) => {
                        return (
                            <tr key={index}>
                                <td> {index} </td>
                                <td> {parent.fathername} </td>
                                <td> {parent.mothername} </td>
                                <td> {parent.mobile} </td>
                                <td> {parent.adhar} </td>
                                <td> {parent.religion} </td>
                                <td> {parent.caste} </td>
                                <td> {parent.occupation} </td>
                                <td> {parent.proof} </td>
                                <td> {parent.address} </td>
                                <td> <button onClick={obj => EditParent(parent)}> Edit </button></td>
                                <td> <button onClick={obj => delParent(parent.id)}> Delete </button></td>
                            </tr>
                        )
                    })
                }
            </table>

        </section>
    );

}

export default ApiTwo;