import React  from "react";
import {Link, useParams, useLocation} from "react-router-dom";

const Blogs = () => {
    //let params = useParams();
    let {search} =useLocation();
    let qParams = new URLSearchParams(search);
    console.log(search);
    return(
        <div>
            <h1> Blog Articles</h1>
            <p>Name:{qParams.get("name")}</p>
            {/* */}
            <p>Age:{qParams.get("age")}</p>
        </div>
    )
};
 export default Blogs;