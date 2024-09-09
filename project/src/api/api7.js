import { useState, useEffect } from "react";

const ApiSix = () =>{
    let[allemp, setEmp] = useState ( [] );

    const getEmp = () =>{
        fetch("http://localhost:1234/emplist")
        .then(response =>response.json())
        .then(empArray=>{
            setEmp( empArray );
        })
    }

    useEffect(()=>{
        getEmp();
    }, []);

    let[empname, setName] = useState("");
    let[empsalary, setSalary] = useState("");
    let[empdept, setDept] = useState("");

    const save = () =>{
        if( userid !=""){
            updateEmp();
        }else{
            let url = "http://localhost:1234/emplist";
            let newemp = {fname:empname, salary:empsalary, dept:empdept};
            let postData = {
                headers:{'content-Type':'application/json'},
                method:"post",
                body:JSON.stringify(newemp)
            }

            fetch(url,postData)
            .then(response =>response.json())
            .then(empinfo=>{
                alert(empname + " - Save Successfully !");
                getEmp(); // reload emp list
                setName("");
                setSalary("");
                setDept("");
            })
        }
    }

    const delEmp = (id) =>{
        let url = "http://localhost:1234/emplist/"+id;
        let postData = {method:"delete"};
        fetch(url,postData)
        .then(response =>response.json())
        .then(empinfo=>{
            alert(empinfo.fname + " - Deleted Successfully !");
            getEmp(); // reload emp list
        })
    }

    let[userid, setUserid] = useState("");

    const EditEmp = (emp) =>{
        setUserid(emp.id);
        setName(emp.fname);
        setSalary(emp.salary);
        setDept(emp.dept);   
    }

    const updateEmp = () =>{
        let url = "http://localhost:1234/emplist/"+userid;
            let newemp = {fname:empname, salary:empsalary, dept:empdept};
            let postData = {
                headers:{'content-Type':'application/json'},
                method:"put",
                body:JSON.stringify(newemp)
            }

            fetch(url,postData)
            .then(response =>response.json())
            .then(empinfo=>{
                alert(empname + " - Update Successfully !");
                getEmp(); // reload emp list
                setName("");
                setSalary("");
                setDept("");
                setUserid("");
            })
    }

    return(
        <section>
            <h1> Employee List : {allemp.length} </h1>

            <table align="left" cellPadding="15">
                <tbody>
                    <tr>
                        <td> Full Name </td>
                        <td> <input type="text" onChange={event=>setName(event.target.value)} value={empname}/> </td>
                    </tr>
                    <tr>
                        <td> Employee Salary </td>
                        <td> <input type="text" onChange={event=>setSalary(event.target.value)} value={empsalary}/> </td>
                    </tr>
                    <tr>
                        <td> Employee Dept </td>
                        <td> <input type="text" onChange={event=>setDept(event.target.value)} value={empdept}/> </td>
                    </tr>
                    <tr>
                        <td colSpan="5" align="center">
                            <button onClick={save}> Save </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table align="right" cellPadding="8">
                <thead>
                    <tr>
                        <th> Sl No </th>
                        <th> Employee Id </th>
                        <th> Employee Name </th>
                        <th> Salary </th>
                        <th> Department </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                        {
                            allemp.map((emp, index)=>{
                                return(
                                    <tr key={index}>
                                        <td> {index} </td>
                                        <td> {emp.id} </td>
                                        <td> {emp.fname} </td>
                                        <td> {emp.salary} </td>
                                        <td> {emp.dept} </td>
                                        <td> <button onClick={ event=>EditEmp(emp) }> Edit </button> </td>
                                        <td>
                                            <button onClick={ event=>delEmp(emp.id) }> Delete </button>
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

export default ApiSix;