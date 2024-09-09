import { useState } from "react";

const HookFive = () => {
    let [allproduct, setProduct] = useState([]);
    let [newproduct, pickProduct] = useState("");

    const save = () => {
        setProduct(allproduct => [...allproduct, newproduct]);
        pickProduct("");
    }

    // text => pickProduct => allproduct => show in html

    return (
        <section>
            <h1>Manage Product : {allproduct.length}</h1>
            <p align="center">
                Enter Product Url : <input 
                 type="text"
                 size="100"
                 onChange={event => pickProduct(event.target.value)}
                 value={newproduct}/>
                <button onClick={save}>Save</button>
            </p>
            {
                allproduct.map((purl, index)=>{
                    return(
                        <img src={purl} className="four" height="200" key={index}/>
                    )
                })
            }
        </section>
    )

}

export default HookFive;