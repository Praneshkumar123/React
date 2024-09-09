import { useSelector } from "react-redux";


const Mydashboard = () =>{
    const booklist = useSelector(state=>state.Booklist);
    const productlist = useSelector(state=>state.Productlist);
    const allblog = useSelector (state=>state.Apilist)
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-xl-12">
                    <h1 className="text-center mb-5"> React & Redux Dashboard </h1>
                </div>
            </div>

            <div className="row mt-4 text-center">
                <div className="col-lg-4">
                    <h4 className="p-4 rounded shadow-lg"> Total Book in store<br/>
                    {booklist.length} </h4>
                </div>
                <div className="col-lg-4">
                    <h4 className="p-4 rounded shadow-lg"> Total Product in store<br/>
                    {productlist.length} </h4>
                </div>
                <div className="col-lg-4">
                    <h4 className="p-4 rounded shadow-lg"> Total Blog in store<br/>
                    {allblog.length} </h4>
                </div>
            </div>
        </div>
    )
}

export default Mydashboard;