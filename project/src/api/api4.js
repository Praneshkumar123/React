import { useEffect, useState } from "react";

const ApiFour = () =>{
    let[photolist, setPhoto] = useState([]);

    const getphoto = () =>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(photoArray =>{
            setPhoto(photoArray);
        })
    }

    useEffect(()=>{
        getphoto();
    },[]);

    let [keyword, setKeyword] = useState("");

    return(
        <section>
            <h1> Recent Photos : {photolist.length} </h1>
            {keyword}
            <p align="center">Search : <input type="text" onChange={obj=>setKeyword(obj.target.value)} /></p>
            {
                photolist.map((photos, index)=>{
                    return(
                        <div key={index} className="three"> 
                            <p> {photos.albumId} </p>
                            <p><b> {photos.id}</b> </p>
                            <h3> {photos.title} </h3>
                            <p> {photos.url} </p>
                            <p> {photos.thumbnailUrl} </p>
                        </div>
                    )
                })
            }
        </section>
    )

}
export default ApiFour;