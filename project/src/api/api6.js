import { useEffect, useState } from "react";

const ApiSix = () =>{
    let[userlist, setUser] = useState([]);

    const getuser = () =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(userArray =>{
            setUser(userArray);
        })
    }

    useEffect(()=>{
        getuser();
    },[]);

    let [keyword, setKeyword] = useState("");

    return(
        <section>
            <h1> Recent Users : {userlist.length} </h1>
            {keyword}
            <p align="center">Search : <input type="text" onChange={obj=>setKeyword(obj.target.value)} /></p>
            {
                userlist.map((users, index)=>{
                    return(
                        <div key={index} className="two"> 
                            <p> {users.id} </p>
                            <p><b> {users.name}</b> </p>
                            <h3> {users.username} </h3>
                            <p>  {users.email} </p>
                            <p>  {users.address.street} </p>
                            <p>  {users.address.suite} </p>
                            <p>  {users.address.city} </p>
                            <p>  {users.address.zipcode} </p>
                            <p>  {users.address.geo.lat} </p>
                            <p>  {users.address.geo.lng} </p>
                            <p>  {users.phone} </p>
                            <p>  {users.website} </p>
                            <p>  {users.company.name} </p>
                            <p>  {users.company.catchPhrase} </p>
                            <p>  {users.company.bs} </p>
                        </div>
                    )
                })
            }
        </section>
    )

}
export default ApiSix;