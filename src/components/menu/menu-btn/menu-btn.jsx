import './menu-btn.scss';

import MenuIcon from '../../../assets/svg/menuIcon.svg?react';
import { useUIState } from '../../../hooks/context/useUIState';

export default function MenuButton() {

  const { menuState, toggleMenu } = useUIState();

  const buttonClass = menuState ? 'open' : 'closed';

  const handleClick = () => {
    toggleMenu();
  };

  return (
    <>
      <button className={"menu-button-container"} onPointerDown={handleClick} >
        <span className={`text-menu  ${buttonClass}`}>Menú</span>
        <span className={`text-close  ${buttonClass}`}>Cerrar</span>
        <MenuIcon className={`menu-button ${buttonClass}`} />
      </button>
    </>
  );
}
