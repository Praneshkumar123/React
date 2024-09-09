import { useState } from "react";

const Myuser = () => {
    let [fullname, pickName] = useState('');
    let [userlist, setUser] = useState([]);

    const save = () => {
        setUser(userlist= [...userlist,fullname]);
        pickName("");
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-xl-12 mb-4">
                    <h1 className="text-center text-danger mb-5"> Manage User :{userlist.length} </h1>
                    <p className="text-center">
                        Enter Full Name : <input type="text" className="m-2"
                            onChange={obj => pickName(obj.target.value)} value={fullname} />
                        <button className="btn btn-primary btn-sm" onClick={save}>Save</button>
                    </p>
                </div>
                {
                    userlist.map((name,index)=>{
                        return(
                          <div className="col-xl-2 mb-3 text-center" key={index}>
                            <p className="p-3 border rounded"> {name} </p>
                          </div>  
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myuser;