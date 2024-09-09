import { useState } from "react";

const HookEight = () => {
    let [allproduct, setProduct] = useState([]);
    let [pname, pickProduct]= useState("");
    let [price, pickPrice]= useState("");


    const save=()=>{
        let newproduct = {pname: pname, price: price,};
        setProduct(allproduct=>[...allproduct, newproduct]);
        pickProduct("");
        pickPrice("");
        alert( pname +"Saved Successfully ! ");
    }
    
    const delproduct =(index)=>{
        allproduct.splice(index, 1);
        setProduct( allproduct =>[...allproduct] );
        alert( "Record Deleted Successfully ! ");
    }
    return (
        <section>
            <h1> Product List  </h1>
            <div align="center">
                <input type="text" placeholder="Product Name" className="smallinput" onChange={event=>pickProduct(event.target.value)} value={pname}/>
                <input type="text" placeholder="Price" className="smallinput" onChange={event=>pickPrice(event.target.value)} value={price} />
                <button onClick={save}>Save</button>
            </div>
            <table align="center" cellPadding="12">
                <thead>
                    <tr>
                        <th> SL No</th>
                        <th> Product Name </th>
                        <th> Price </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allproduct.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td> {index}</td>
                                    <td> {product.pname} </td>
                                    <td> {product.price} </td>
                                    <td>
                                        <button onClick={event=>delproduct(index)}>Delete</button>
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

export default HookEight;