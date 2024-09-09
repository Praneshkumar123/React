const Employee = () => {
    let allemployee = [
        {city:"Bangalore", userlist:['Sam','Dinesh','Yuvesh']},
        {city:"Mumbai", userlist:['Arun','Fahad']},
        {city:"Hyderabad", userlist:['Nithesh', 'Mohammed']},
        {city:"Chennai", userlist:['Harshit','Jai']},
        {city:"Delhi", userlist:['Karan','Yathavan','Madhan']},
        {city:"Kolkata", userlist:['Deivik','Harish']}
    ]
    return (
        <section>
            <h1>Manage Employee : {allemployee.length} </h1>
            {
                allemployee.map((employee, index)=>{
                    return(
                        <fieldset key={index}>
                            <legend> {employee.city} - {employee.userlist.length} </legend>

                            {
                                employee.userlist.map((fullname,index2)=>{
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

export default Employee;