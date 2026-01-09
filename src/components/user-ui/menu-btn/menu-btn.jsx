import './menu-btn.scss';

import MenuIcon from '../../../assets/svg/menuIcon.svg?react';
import { useUIState } from '../../../hooks/context/useUIState';

export default function MenuButton() {

  const { menuState, toggleMenu, closeLocation } = useUIState();

  const buttonClass = menuState ? 'open' : 'closed';

  const handleClick = () => {
    toggleMenu();
    closeLocation();
  };

  return (
    <>
      <button className={`menu-button-container ${buttonClass}`} onPointerDown={handleClick} >
        <MenuIcon className={`menu-button ${buttonClass}`} />
      </button>
    </>
  );
}
