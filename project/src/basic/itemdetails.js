const ItemDetails = (pdata) =>{
    return(
        <fieldset>
            <legend> {pdata. pname} </legend>
            <p> Name : {pdata.pname} </p>
            <p> Cost : {pdata.price} </p>
            <p> Quantity : {pdata.quantity} </p>
        </fieldset>
    )
}

export default ItemDetails;

// pdata = { pname="Mango" price="200" qty="10"}