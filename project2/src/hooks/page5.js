import { useState } from "react";

const HookFive= () =>{
 let [alluser, setUser] = useState([]);
 let [allbook, setBook] = useState([]);
 let [allcompany, setCompany] = useState([]);
 let [allemp, setEmp] = useState([]);


    const getUser = ()=>{
        fetch("user.json")
        .then(abc=> abc.json())
        .then(userArray=>{
            setUser(userArray);
        })
    }

    const getBook =()=>{
        fetch("book.json")
        .then(dfe => dfe.json())
        .then(bookArray =>{
            setBook(bookArray);
        })
    }
    const getCompany =()=>{
        fetch("company.json")
        .then(ghi=>ghi.json())
        .then(companyArray =>{
            setCompany(companyArray);
        })
    }
    const getEmp =()=>{
        fetch("emp.json")
        .then(jkl=>jkl.json())
        .then(empArray=>{
            setEmp(empArray);
        })
    }
    return(
        <section>
            <h1> Assignment 5 </h1>
            < button onClick={getUser} > Show User </button>
            < button onClick={getBook}> Show Book </button>
            < button onClick={getCompany}> Show Company </button>
            < button onClick={getEmp}> Show Employee </button>
        <br/><br/>
            <fieldset>
                <legend> User : {alluser.length} </legend>
                {
                    alluser.map((userName, index)=>{
                            return(
                                <p key={index}> {userName} </p>
                            )
                    })
                }
            </fieldset>
            <fieldset>
                <legend> Book : {allbook.length} </legend>
                {
                    allbook.map((book, index)=>{
                        return(
                            <p key={index}> {book.bname} : {book.cost} </p>
                        )
                    })
                }
            </fieldset>
            <fieldset>
                <legend> Company : {allcompany.length} </legend>
                {
                    allcompany.map((companyName, index)=>{
                            return(
                                <p key={index}> {companyName} </p>
                            )
                    })
                }
                </fieldset>
                <fieldset>
                <legend> Employee : {allemp.length} </legend>
                {
                    allemp.map((empName, index)=>{
                            return(
                                <p key={index}> {empName} </p>
                            )
                    })
                }
            </fieldset>
        </section>
        )
        
    }
 
 export default HookFive;