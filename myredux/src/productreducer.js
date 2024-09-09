import { act } from "react";

const Productlist = (state = [], action) => {

    let data = Object.assign([], state); 
    if (action.type === "saveproduct")
     {
        data.push(action.pinfo);
    }
    if(action.type ==="removeproduct"){
        data.splice(action.productindex, 1)
    }
    return data;
}
export default Productlist;