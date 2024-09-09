import { useEffect, useState } from "react";

const ApiNine =()=>{
    let[allproduct, setProduct] = useState([]);

    const getProduct = () =>{
        fetch("http://localhost:1234/productlist")
        .then(response => response.json())
        .then(productArray =>{
            setProduct(productArray);
        })
    }

    useEffect (()=>{
        getProduct();
    },[]);

    let[productname, setPname] = useState("");
    let[productcost, setCost] = useState("");
    let[productqty, setQty] = useState("");

    const save = () => {
        if (productid != "") {
            updateProduct();
        } else {
        let url = "http://localhost:1234/productlist"
        let newproduct = { pname: productname, cost: productcost, qty: productqty }
        let postData ={
            headers:{'content-Type':'application/json'},
            method:"post",
            body: JSON . stringify(newproduct)
        }
        fetch(url, postData)
        .then(response=>response.json())
        .then(productinfo=>{
            alert(productname + "- Saved Successfully");
            getProduct();// reload emplist
            setPname("");
            setCost("");
            setQty("");
        })
    }
    }
    const delProduct =(id) =>{
        let url = "http://localhost:1234/productlist/" + id;
        let postData ={method:"delete"};
        fetch(url, postData)
        .then(response=>response.json())
        .then(productinfo=>{
            alert(productinfo.pname + "- Deleted Successfully !");
            getProduct();
        })
    }
    let [productid, setProductid] = useState("");
    const EditProduct = (product) =>{
        setProductid(product.id);
        setPname(product.pname);
        setCost(product.cost);
        setQty(product.qty);
    }
    const updateProduct = () =>{
        let url = "http://localhost:1234/productlist/"+productid;
        let newproduct = { pname: productname, cost: productcost, qty: productqty }
        let postData ={
            headers:{'content-Type':'application/json'},
            method:"put",
            body: JSON . stringify(newproduct)
        }
        fetch(url, postData)
        .then(response=>response.json())
        .then(productinfo=>{
            alert(productname + "- Updated Successfully");
            getProduct();
            setPname("");
            setCost("");
            setQty("");
            setProductid("");
        })
    }
    return(
        <section>
            <h1> Product List </h1>
            <table align="left" cellPadding="15">
            <tbody>
                    <tr>
                        <td> Product Name : </td>
                        <td> <input type="text" onChange={event =>setPname(event.target.value)} value={productname}/> </td>
                    </tr>
                    <tr>
                        <td>  Cost : </td>
                        <td> <input type="text"onChange={event =>setCost(event.target.value)} value={productcost}/> </td>
                    </tr>
                    <tr>
                        <td> Quantity : </td>
                        <td> <input type="text" onChange={event =>setQty(event.target.value)} value={productqty}/> </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center">
                        <button  onClick={save}> Save </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table align="right" cellPadding="15" >
                <thead>
                    <tr>
                        <th> SL No </th>
                        <th> Product ID </th>
                        <th> Product Name </th>
                        <th> Product Cost </th>
                        <th> Product Quantity </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allproduct.map((product, index)=>{
                            return(
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {product.id} </td>
                                    <td> {product.pname} </td>
                                    <td> {product.cost} </td>
                                    <td> {product.qty} </td>
                                    <td> <button onClick={obj=>EditProduct(product)} >Edit</button> </td>
                                    <td> <button onClick={obj=>delProduct(product.id)}> Delete </button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}

export default ApiNine;