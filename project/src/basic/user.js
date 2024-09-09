import ItemDetails from "./itemdetails";

const Myuser = () => {
    let alluser = ['Gokul', ' Yuvan', 'Akash', 'Suhas', 'Varun', 'Sathish', 'Yadhavan','Santhosh','Tishagar'];
    return (
        <section>
            <h1>Manage User : {alluser.length} </h1>
            <p> Users Lists :- </p>
            {
                alluser.map((fullName, index) => {
                    return (
                        <p key={index} className="four">{index} . {<i>{fullName}</i>}</p>
                    )
                })
            }

            <ItemDetails pname="Printer HP" cost="12,000" quantity="10"/>
        </section>
    )
}

export default Myuser;

/*
  in html page  <script> alluser.length </script>
    in JSX    { alluser.length }
*/