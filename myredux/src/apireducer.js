import { act } from "react";

const Apilist = (state = [], action) => {

    let data = Object.assign([], state);
    if (action.type === "saveblog") {
        data = action.blogdata;
    }
    return data;
}
export default Apilist;