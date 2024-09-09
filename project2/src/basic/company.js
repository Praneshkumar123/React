const Company = ()=>{
    let allcompany = ['Toyota','BMW','Jeep','Ferrari','Lamborghini','Ford Mustang','Bugatti','Rolls-Royce','Koenigsegg','Tata','Jaguar','Mercedes-Benz' ];
    return(
        <section>
            <h1> Companies List  : {allcompany.length} </h1>
            {
                allcompany.map((fullName, index) => {
                    return (
                        <p key={index} className="four">{index} . {<i>{fullName}</i>}</p>
                    )
                })
            }
        </section>
    )
}
export default Company;