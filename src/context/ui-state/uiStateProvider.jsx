import { useCallback, useMemo, useState } from "react";

import { UIStateContext } from "./uiStateContext";

export default function UIStateProvider({ children }) {
  
  const [menuState, setMenuState] = useState(false);

  const [selectedTab, setSelectedTab] = useState(0);

  const [selectedModel, setSelectedModel] = useState("");

  // Open menu AND ensure location is closed
  const openMenu = useCallback(() => {
    setMenuState(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuState(false);
  }, []);

  // Toggle menu convenience
  const toggleMenu = useCallback(() => {
    setMenuState(prev => {
      const next = !prev;
      return next;
    });
  }, []);

  const changeSelectedModel = useCallback((model) => {
    setSelectedModel(model);
  }, []);

  const changeSelectedTab = useCallback((i) => {
    setSelectedTab(i);
  }, []);

  const value = useMemo(() => ({
    menuState,
    changeSelectedModel,
    selectedModel,
    changeSelectedTab,
    selectedTab,
    openMenu,
    closeMenu,
    toggleMenu,
  }), [
    menuState,
    changeSelectedModel,
    selectedModel,
    changeSelectedTab,
    selectedTab,
    openMenu,
    closeMenu,
    toggleMenu,
  ]);

  return (
    <UIStateContext.Provider value={value}>
      {children}
    </UIStateContext.Provider>
  );
  
}
