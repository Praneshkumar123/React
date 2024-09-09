import { useEffect, useState } from "react";

const ApiThree = () =>{
    let[albumlist, setAlbum] = useState([]);

    const getalbum = () =>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(albumArray =>{
            setAlbum(albumArray);
        })
    }

    useEffect(()=>{
        getalbum("");
    },[])

    let [keyword, setKeyword] = useState("");

    return(
        <section>
            <h1> Recent Albums : {albumlist.length} </h1>
            {keyword}
            <p align="center">Search : <input type="text" onChange={obj=>setKeyword(obj.target.value)} /></p>
            {
                albumlist.map((albums, index)=>{
                    return(
                        <div key={index} className="three"> 
                            <p> {albums.userId} </p>
                            <p><b> {albums.id}</b> </p>
                            <h3> {albums.title} </h3>
                        </div>
                    )
                })
            }
        </section>
    )

}
export default ApiThree;