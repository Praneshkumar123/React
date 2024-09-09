import ItemDetails from "./itemdetails";

const Itemlist = () =>{
    return(
        <section>
            <h1 align='center'> Re-use, props, nested component</h1>
            <ItemDetails pname="Banana" price="100" quantity="10" />
            <ItemDetails pname="Apple" price="200" quantity="15" />
            <ItemDetails pname="Grapes" price="300" quantity="20" />
            <ItemDetails pname="Mango" price="400" quantity="25" />
        </section>
    )
}

export default Itemlist;