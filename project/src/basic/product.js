const Myproduct = () => {
    let allproduct = [
        {pname:"Printer HP", cost:"12,000", quantity:"10", city:"Bangalore"},
        {pname:"Lenovo 12", cost:"54,000", quantity:"15", city:"Mumbai"},
        {pname:"Mac Book", cost:"1,20,000", quantity:"16", city:"Delhi"},
        {pname:"Asus", cost:"84,000", quantity:"20", city:"Chennai"},
        {pname:"Vicitus", cost:"68,000", quantity:"10", city:"Hyderabad"}
    ]
    return (
        <section>
            <h1>Manage Product : {allproduct.length}</h1>
            <table align="center" cellPadding="15">
                <thead>
                    <tr>
                        <th> SI No </th>
                        <th> Prodct Name </th>
                        <th> Cost </th>
                        <th> Quantity</th>
                        <th> Delivery Location </th>
                    </tr>
                </thead>
                <tbody>
                   { 
                   allproduct.map((product , index)=>{
                    return(
                       <tr> 
                        <td>{index}</td>
                        <td>{product.pname}</td>
                        <td>{product.cost}</td>
                        <td>{product.quantity}</td>
                        <td>{product.city}</td>
                       </tr>
                    )
                   })
                }
                </tbody>
            </table>
        </section>
    )
}

export default Myproduct;