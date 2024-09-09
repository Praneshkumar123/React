import { useState } from "react";

const HookNine = () =>{
    let [allcity, setCity] = useState([]);

    const getCity = () =>{
        fetch("city.json")
        .then(tvk =>tvk.json())
        .then(cityArray=>{
            setCity(cityArray);
        })
    }
    let[allbook, setBook ] = useState([]);
    const getBook = ()=>{
        fetch("book.json")
        .then(abc =>abc.json())
        .then(bookArray=>{
            setBook(bookArray);
        })
    }
    

    return(
        <section>
            <h1> How to use fetch() </h1>
            <button onClick={getCity}>Show City </button>
            <button onClick={getBook}>Show Book </button>
            <fieldset>
                <legend> City : {allcity.length} </legend>
                {
                    allcity.map((cityName, index)=>{
                        return(
                            <p key={index}> {cityName} </p>
                        )
                    })
                }
            </fieldset>
            <fieldset>
                <legend> Book: {allbook.length} </legend>
                {
                    allbook.map((book, index)=>{
                        return(
                            <p key={index}> {book.bname} : {book.cost} </p>
                        )
                    })
                }
            </fieldset>
            
        </section>
    )
}
export default HookNine; 