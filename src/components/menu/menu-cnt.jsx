import "./menu-cnt.scss";

import MenuItems from "./menu-items/menu-items";
import { useUIState } from "../../hooks/context/useUIState";

export default function Menu() {
   
  const { menuState } = useUIState();

  const menuClass = menuState ? "open" : "closed";

  return (
    <>

      <nav className={`menu-container ${menuClass}`}>

        <ul className="menu">
          <MenuItems />
        </ul>

      </nav>

    </>
  )

};
