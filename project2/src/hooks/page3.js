import { useState } from "react";

const HookThree = () =>{
    
  const [name1, setName1] = useState('');
  const [price2, setPrice2] = useState('');
  const [display, setDisplay] = useState('');

  // const one = (event) => {
  //   setName1(event.target.value);
  // };

  // const two = (event) => {
  //   setPrice2(event.target.value);
  // };

  const save = () => {
    setDisplay(` ${name1} Price is : ${price2}`);
  };

  return (
    <div className="inputbox" align="center">
       <h1> Assignment 3</h1>
      Name <input type="text" value={name1} onChange={event=>setName1(event.target.value)}/><br/><br/>
      Price <input type="text" value={price2} onChange={event=>setPrice2(event.target.value)}/><br/><br/>
      <button onClick={save}> Go </button>
      <p>{display}</p>
    </div>
  );

}

export default HookThree;