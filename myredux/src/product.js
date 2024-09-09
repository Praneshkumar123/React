import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Myproduct = () => {

    let [productinfo, setInfo] = useState({});
    const pickValue = (obj) => {
        productinfo[obj.target.name] = obj.target.value;
        setInfo(productinfo);
    }
    const dispatch = useDispatch();
    const save = () => {
        let dispatchData = { type: "saveproduct", pinfo: productinfo };
        dispatch(dispatchData);
        setInfo({}); // clear the old data
    }

    const deleteproduct =(index)=>{
        let data = {productindex:index, type:"removeproduct"};
        dispatch(data);
    }

    let allproduct = useSelector(state => state.Productlist)
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center mb-4">
                    <h3> Manage Product :{allproduct.length} </h3>
                    <p>
                        <input type="text" className="m-2" placeholder="Enter Item Name" name="pname" onChange={pickValue} />
                        <input type="text" className="m-2" placeholder="Enter Item Price" name="price" onChange={pickValue}  />
                        <input type="text" className="m-2" placeholder="Enter Item Quantity" name="qty" onChange={pickValue} />
                        <button className="btn btn-primary m-2 btn-sm" onClick={save}> Save </button>
                    </p>
                </div>
                { 
                    allproduct.map((product, index) => {
                        return (
                            <div className="col-lg-3 mb-4" key={index}>
                                <h5>{product.pname}</h5>
                                <p> Rs.{product.price} </p>
                                <p> Stock : {product.qty}  </p>
                                <button className="btn btn-danger btn-sm m-2" onClick={obj=>deleteproduct(index)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myproduct;