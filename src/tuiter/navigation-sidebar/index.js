import React from "react";
import {useLocation} from "react-router";
import NavItem from "./nav-item";
import sidebars from "./tabs.json";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return(
        <div className="list-group sticky-top">
            <Link to="/" className="list-group-item">Labs</Link>
            {
                sidebars.map(sidebar => {
                return(
                    // If the path is /tuiter, then active home link
                    <NavItem key={sidebar._id} sidebar={sidebar} active={active ? active : "home"}/>)
                })
            }
            <div className="d-grid mt-2">
                <button className="btn btn-primary btn-block rounded-pill">Tuit</button>
            </div>
        </div>
    );
}

export default NavigationSidebar;
