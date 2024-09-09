import { act } from "react";

const Booklist = (state = [], action) => {

    let data = Object.assign([], state); // fetch old value from state if any else assign with empty
    if (action.type === "savebook")
     {
        data.push(action.newbook);
    }
    if(action.type ==="removebook"){
        data.splice(action.bookindex, 1)
    }
    return data;
}
export default Booklist;