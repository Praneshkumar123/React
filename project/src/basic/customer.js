const Mycustomer = () => {
    let allcustomer = [
        {city:"Bangalore", userlist:['Gokul','Vithosh','Yuvan']},
        {city:"Mumbai", userlist:['Akash','Suhas']},
        {city:"Hyderabad", userlist:['Varun', 'Sathish']},
        {city:"Chennai", userlist:['Santhosh','Tishagar']},
        {city:"Delhi", userlist:['Hemanth','Yathavan','Madhan']},
        {city:"Kolkata", userlist:['Deivik','Harish']}
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

export default Mycustomer;