const MyCustomer = () => {
    let allcustomer = [
        {city:"Bangalore", userlist:['Gokul','Joshep Vijay','Yuvan']},
        {city:"Mumbai", userlist:['Dhoni','Virat Kohli']},
        {city:"Hyderabad", userlist:['Ranjikanth', 'Sathish']},
        {city:"Chennai", userlist:['Santhosh','Ambani']},
        {city:"Delhi", userlist:['Smith','Yash','Joe Roote']},
        {city:"Kolkata", userlist:['Prabas','Gambhir']}
    ]
    return (
        <section>
            <h1>Manage Customer : {allcustomer.length} </h1>
            {
                allcustomer.map((customer, index)=>{
                    return(
                        <fieldset key={index}>
                            <legend> {customer.city} - {customer.userlist.length} </legend>

                            {
                                customer.userlist.map((fullname,index2)=>{
                                    return(
                                        <p key={index2}>{fullname}</p>
                                    )
                                })
                            }
                        </fieldset>
                    )
                })
            }
        </section>
    )
}

export default MyCustomer;