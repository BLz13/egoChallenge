import Tab1 from "./tab-1/tab-1";
import Tab2 from "./tab-2/tab-2";
import { useUIState } from "../../hooks/context/useUIState";

export default function TabsContainer() {

    const { selectedTab } = useUIState();

    switch (selectedTab) {
        case 0: return <Tab1 />;
        case 1: return <Tab2 />;
        default: return <Tab1 />;
    }
    
}