const City = ()=>{
    let allcity = ['Bangalore','Chennai','Los Vegas','London','Paris','Kolkata','Delhi','Mumbai','Coimbatore' ];
    return(
        <section>
            <h1> Companies List  : {allcity.length} </h1>
            {
                allcity.map((fullName, index) => {
                    return (
                        <p key={index} className="four">{index} . {<i>{fullName}</i>}</p>
                    )
                })
            }
        </section>
    )
}
export default City;