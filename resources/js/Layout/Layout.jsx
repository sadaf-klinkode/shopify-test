import { Outlet, RouterProvider, Link } from "react-router-dom";

const Layout = () => {


    return (
        <div className='bg-slate-100'>
            <ui-title-bar title="Products">
                <button onclick="console.log('Secondary action')">Secondary action</button>
                <button variant="primary" onclick="console.log('Primary action')">
                    Primary action
                </button>
            </ui-title-bar>

            <ui-nav-menu>
                <Link to="/">List</Link>
                <Link to="/form">Add New</Link>
            </ui-nav-menu>

            <Outlet></Outlet>
        </div>
    );
};

export default Layout;