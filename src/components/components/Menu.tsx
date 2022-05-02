import React from "react";
import {
  Link
} from "react-router-dom";

interface MenuProps {
}

const Menu: React.FC = (props: MenuProps) => {

return (
    <div>
    Menu
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="article">About</Link>
      </nav>
    </div>
    )
}

export default Menu;