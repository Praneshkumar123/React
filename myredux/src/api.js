import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Myapi = () =>{
    let [bloglist, setBlog] = useState([]);

    const getblog =()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(blogArray=>{
            setBlog(blogArray);
        })
    }

    useEffect(()=>{
        getblog();
    },[]);

    const dispatch = useDispatch();
    const save =()=>{
        let dispatchData = {type:"saveblog", blogdata:bloglist};
        dispatch(dispatchData);
        alert("All Data Sent to Redux")
    }

    return(
        <div className="mt-4 container">
            <div className="row">
                <h3 className="col-xl-12 text-center mb-4"> Total Blogs : {bloglist.length} </h3>
                <button className="btn btn-primary m-3" onClick={save} > Save in Redux </button>

                {
                    bloglist.map((blog,index)=>{
                        return(
                            <div className="col-xl-3 mb-4" key={index}>
                                <p>{blog.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myapi;