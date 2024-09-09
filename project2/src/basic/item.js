const Item = () => {
        let allitem = [
            {pname:"Mahindra Thar Roxx", cost:"16.25 Lakhs", type:"Petrol/Diesel", city:"Bangalore"},
            {pname:"Lamborghi Revuelto", cost:"8.89 Cores", type:"Petrol", city:"Mumbai"},
            {pname:"Rolls-Royce Ghost", cost:"9.52 Cores", type:"Petrol/Automatic", city:"Delhi"},
            {pname:"Ferrari Roma", cost:"3.76 Cores", type:"Petrol", city:"Chennai"},
            {pname:"Bugatti Veyron", cost:"11.39 Cores", type:"Petrol/Diesel", city:"Hyderabad"},
            {pname:"BMW i7", cost:"2.03 Cores", type:"Diesel/Petrol", city:"Kolkata"},
            {pname:"Mercedes-Benz Maybach S-class", cost:"2.72 Cores", type:"Petrol/Diesel", city:"Kerala"}
        ]
        return (
            <section>
                <h1>Manage Item : {allitem.length}</h1>
                <table align="center" cellPadding="15">
                    <thead>
                        <tr>
                            <th> SI No </th>
                            <th> Prodct Name </th>
                            <th> Cost </th>
                            <th> Type </th>
                            <th> Delivery Location </th>
                        </tr>
                    </thead>
                    <tbody>
                       { 
                       allitem.map((item , index)=>{
                        return(
                           <tr> 
                            <td>{index}</td>
                            <td>{item.pname}</td>
                            <td>{item.cost}</td>
                            <td>{item.type}</td>
                            <td>{item.city}</td>
                           </tr>
                        )
                       })
                    }
                    </tbody>
                </table>
            </section>
        )
}

export default Item;