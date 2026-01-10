import './user-ui.scss';

import Logo from '../../assets/svg/logoDark.svg?react';
import Menu from '../menu/menu-cnt';
import MenuButton from './menu-btn/menu-btn';
import Tabs from '../menu/tabs/tabs';

export default function UserUI() {
    return (
        <div className="user-ui">

            <header>
                <Logo className="site-logo"/>
                <Tabs />
                <MenuButton />
            </header>

            <aside>                
                <Menu />
            </aside>

        </div>
    );
}