import {Outlet, Link} from "react-router-dom";   

const Layout = () => {
    const user = "SRI";
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to={`/blogs?name=${user}&age=${24}`}>Blogs</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
        </>
    )
};
 export default Layout;