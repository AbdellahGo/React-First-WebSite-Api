import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Recipes">Recipes</NavLink>
            <NavLink to="/Dogs">Dogs</NavLink>
        </nav>
    )
}


export default Links;