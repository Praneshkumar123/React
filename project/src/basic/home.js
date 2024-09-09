const Myhome = ()=>{
    let imagelist = ['1.jpeg', '2.jpg', '3.jpg', '4.jpg'];

    return (
        <section>
            <h1>Welcome To React  Home </h1>
            {
                imagelist.map((url, index)=>{
                    return(
                        <img key={index} src={url} className="four" height="250"/>
                    )
                })
            }
        </section>
    )
}

export default Myhome;