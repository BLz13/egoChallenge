import './labels.scss';

import { TABS } from "../../../utils/tabs.js";
import { useUIState } from '../../../hooks/context/useUIState.jsx';

export default function TabsLabels() {

    const { selectedModel, selectedTab, changeSelectedTab } = useUIState();
    
    const tabs = TABS.map((items, i) => {

        let className = 'menu-tabs';
        
        if (items.id === "fichaModelo") {
            if (selectedModel === "") {
                className = 'menu-tabs hidden';
            } else if (selectedTab === i) {
                className = 'menu-tabs active';
            }
        } else if (selectedTab === i) {
            className = 'menu-tabs active';
        }
        
        return (
            <li className={className} key={items.id} onClick={() => changeSelectedTab(i)}>
                {items.label}
            </li>
        );
        
    });

    return (
        <ul className="tabs">
            {tabs}
        </ul>
    );
}