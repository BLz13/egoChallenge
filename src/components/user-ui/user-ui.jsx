import './user-ui.scss';

import Logo from '../../assets/svg/logoDark.svg?react';
import Menu from '../menu/menu-cnt';
import MenuButton from './menu-btn/menu-btn';

export default function UserUI() {
    return (
        <div className="user-ui">

            <header>

                <Logo />

                <MenuButton />

            </header>

            <aside>
                
                <Menu />

            </aside>

        </div>
    );
}