import { useState } from "react";

const HookSeven=()=>{
        let [mymessage, setMessage]=useState("");
        return(
          <section>
                <h1> What is Your Message </h1>
                <div align="center">
                        <input type="text" className="style" size="50" rowspan="7" onChange={event=>setMessage(event.target.value)}/>
                        <p> Your Message : {mymessage} </p>
                        <p> Your Message : {mymessage.length}character</p>
                </div>
                <p></p>
          </section>  
        )
}

export default HookSeven;