import React from "react";
import { Router, Link, Location } from "@reach/router"

interface MenuProps {
}

const Menu: React.FC = (props: MenuProps) => {

return (
    <div>
    Menu
    <Link to="/">Home</Link>
    <Link to="/article">Article</Link>
    </div>
    )
}

export default Menu;