import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const ApiOne = () => {
    let[bloglist, setBlog] = useState( [] );

    const getblog = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(blogArray =>{
            setBlog( blogArray );
        })
    }

    useEffect(()=>{
        getblog();
    }, []);   //[] allow to call useEffect() only one time.

    let[keyword, setKeyword] = useState("");
    const PER_PAGE = 4;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(bloglist.length / PER_PAGE);

    return(
        <section>
            <h1> Recent Blog : {bloglist.length} </h1>
            {keyword}
            <p align="center">
                Search : <input type="text" onChange={obj=>setKeyword(obj.target.value)} />
            </p>
            {
                bloglist.slice(offset,offset +PER_PAGE).map((blog, index)=>{
                    if( blog.body.toLowerCase().match( keyword.toLowerCase() ) )
                    return(
                        <div key={index} className="two"> 
                            <h3> {blog.title} </h3>
                            <p> {blog.body} </p>
                        </div>
                    )
                })
            }
            <div className="pagination">
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            breakLabel={"..."}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                        />
                    </div>
        </section>
    )
}

export default ApiOne;