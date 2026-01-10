import './user-ui.scss';

import Logo from '../../assets/svg/logoDark.svg?react';
import Menu from '../menu/menu-cnt';
import MenuButton from '../menu/menu-btn/menu-btn';
import TabsLabels from '../tabs/labels/labels';

export default function UserUI() {
    return (
        <div className="user-ui">

            <header>
                <Logo className="site-logo"/>
                <TabsLabels />
                <MenuButton />
            </header>

            <aside>                
                <Menu />
            </aside>

        </div>
    );
}