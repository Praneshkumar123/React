import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Mybook = () => {
    let [bookname, pickName] = useState('');
    const booklist = useSelector(state=>state.Booklist); // fetch data from store 
    
    const dispatch = useDispatch();

    const save = () => {
        let data = {newbook:bookname, type:"savebook"};
        dispatch(data); // it send data  to store in redux where book reducer will capture it
        pickName("");
    }

    const deletebook = (index) =>{
        let data = {bookindex:index, type:"removebook"};
        dispatch(data);
        alert(index)
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-xl-12 mb-4">
                    <h1 className="text-center text-primary mb-5"> Manage Book :{booklist.length} </h1>
                    <p className="text-center">
                        Enter Book Name : <input type="text" className="m-2"
                            onChange={obj => pickName(obj.target.value)} value={bookname}/>
                        <button className="btn btn-primary btn-sm" onClick={save}>Save</button>
                    </p>
                </div>
                {
                    booklist.map((name,index)=>{
                        return(
                          <div className="col-xl-2 mb-3 text-center" key={index}>
                            <p className="p-3 border rounded"> {name} </p>
                            <button className="btn btn-danger btn-sm" onClick={obj=>deletebook(index)}>Delete</button>
                          </div>  
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Mybook;