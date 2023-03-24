import {Link} from "react-router-dom";
import React from "react";

const NavItem = ({
    sidebar = {
        iconMain: "fa-brands fa-twitter",
        iconSub: "",
        name: ""
    },
    active = ""
}) => {
    return(
        // If the sidebar is the twitter, it does not have the name and redirect it to /explore route.
        <Link to={`/tuiter/${!sidebar.name ? "explore" : sidebar.name}`}
              className={`list-group-item ${sidebar.name && active === sidebar.name?'active':''}`}>
            <div className="row">
                <div className="col-xl-2">
                    <i className={sidebar.iconMain}></i>
                </div>
                <div className="d-none d-xl-inline col-xl-10">
                    {sidebar.name ? sidebar.name[0].toUpperCase() + sidebar.name.slice(1) : ""}
                </div>
            </div>
        </Link>
    )
}

export default NavItem;
