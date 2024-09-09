import { useEffect, useState } from "react";

const ApiTwo = () =>{
    let[commentlist, setComment] = useState([]);

    const getcomment = () =>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(commentArray =>{
            setComment(commentArray);
        })
    }

    useEffect(()=>{
        getcomment();
    },[]);

    let [keyword, setKeyword] = useState("");

    return(
        <section>
            <h1> Recent Comments : {commentlist.length} </h1>
            {keyword}
            <p align="center">Search : <input type="text" onChange={obj=>setKeyword(obj.target.value)} /></p>
            {
                commentlist.map((comments, index)=>{
                    if( comments.body.toLowerCase().match( keyword.toLowerCase() ) )
                    return(
                        <div key={index} className="three"> 
                            <p> {comments.postId} </p>
                            <p><b> {comments.id}</b> </p>
                            <h3> {comments.name} </h3>
                            <p> {comments.email} </p>
                            <p> {comments.body} </p>
                        </div>
                    )
                })
            }
        </section>
    )

}
export default ApiTwo;