import { useState } from "react";

const HookFour = () => {
    let [alltransport, setTransport] = useState([{ tid: 298, tnum: 5296, rname: "Coimbatore", size: "Heavy", dname: "Dinesh", dnum: 8624713907 }]);
    let [tid, pickId] = useState("");
    let [tnum, pickName] = useState("");
    let [rname, pickNum] = useState("");
    let [size, pickSize] = useState("");
    let [dname, pickDname] = useState("");
    let [dnum, pickDnum] = useState("");

    const save = () => {
        let newtransport = { tid, tnum, rname, size, dname, dnum };
        setTransport(alltransport => [...alltransport, newtransport]);
        pickId("");
        pickName("");
        pickNum("");
        pickSize("");
        pickDname("");
        pickDnum("");

    }


    const deltransport = (index) => {
        alltransport.splice(index, 1);
        setTransport(alltransport => [...alltransport]);

    }


    return (
        <section >
            <h1> Assignment 4 </h1>
            <table align="left" cellPadding="15">
                <h2 colSpan="center" align="center"> New Transport </h2>
                <tr>
                    <td>Transport ID:</td>
                    <td> <input type="text" class="form-control" onChange={event => pickId(event.target.value)} value={tid} /></td>
                </tr>
                <tr>
                    <td>Transport Number:</td>
                    <td> <input type="text" class="form-control" onChange={event => pickName(event.target.value)} value={tnum} /></td>
                </tr>

                <tr>
                    <td>Root Name:</td>
                    <td><input type="text" class="form-control" onChange={event => pickNum(event.target.value)} value={rname} /></td>
                </tr>

                <tr>
                    <td>Size:</td>
                    <td><input class="form-select" onChange={event => pickSize(event.target.value)} value={size} /></td>
                </tr>

                <tr>
                    <td>Driver Name:</td>
                    <td><input type="text" class="form-control" onChange={event => pickDname(event.target.value)} value={dname} /></td>
                </tr>

                <tr>
                    <td> Drive Mobile No:</td>
                    <td><input type="number" class="form-control" onChange={event => pickDnum(event.target.value)} value={dnum} /></td>
                </tr>
                <tr>
                    <td colSpan="2" align="center"> <button onClick={save} class="bg-primary text-white form-control mt-3"> Save </button></td>
                </tr>
            </table>

            <table align="right" cellpadding="10">
                <thead>
                    <tr>
                        <th> SL No </th>
                        <th> T-Id </th>
                        <th> T-Number </th>
                        <th> Transport root </th>
                        <th> Type </th>
                        <th> Driver </th>
                        <th> Mobile No </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody >
                    {
                        alltransport.map((transport, index) => {
                            return (
                                <tr key={index}>
                                    <td> {index}</td>
                                    <td> {transport.tid}</td>
                                    <td>  {transport.tnum}</td>
                                    <td>  {transport.rname}</td>
                                    <td>  {transport.size}</td>
                                    <td> {transport.dname}</td>
                                    <td> {transport.dnum}</td>
                                    <td> <button onClick={event => deltransport(index)}>Delete</button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}

export default HookFour;