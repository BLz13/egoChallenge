import { FILTER_SEGMENT, SORT_ORDER } from "../../utils/filters";
import { useCallback, useMemo, useState } from "react";

import { UIStateContext } from "./uiStateContext";

export default function UIStateProvider({ children }) {
    
  //MENU CONTROLS

  const [menuState, setMenuState] = useState(false);

  const openMenu = useCallback(() => {
    setMenuState(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuState(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuState(prev => {
      const next = !prev;
      return next;
    });
  }, []);

  //TABS CONTROLS
  
  const [selectedTab, setSelectedTab] = useState(0);

  const changeSelectedTab = useCallback((i) => {
    setSelectedTab(i);
  }, []);

  //SELECTED MODEL

  const [selectedModel, setSelectedModel] = useState("");

  const changeSelectedModel = useCallback((model) => {
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      setSelectedModel(model);
      setSelectedTab(1);
    }, 500);
    
  }, []);
  
  //FILTERS CONTROLS

  const [sortState, setSortState] = useState(false);

  const [filterState, setFilterState] = useState(false);

  const openSort = useCallback(() => {
    setSortState(true);
  }, []);

  const closeSort = useCallback(() => {
    setSortState(false);
  }, []);
  
  const openFilters = useCallback(() => {
    setFilterState(true);
  }, []);
  
  const closeFilters = useCallback(() => {
    setFilterState(false);
  }, []);

  const toggleSort = useCallback(() => {
    closeFilters();
    setSortState(prev => {
      const next = !prev;
      return next;
    });
  }, [closeFilters]);

  const toggleFilters = useCallback(() => {
    closeSort();
    setFilterState(prev => {
      const next = !prev;
      return next;
    });
  }, [closeSort]);

  //MODEL FILTERS

  const [filters, setFilters] = useState({
    segment: {
      selected: 0,
      items: FILTER_SEGMENT
    },
    sortBy: {
      selected: 0,
      order: SORT_ORDER
    }
  });

  const handleSegmentChange = useCallback((index) => {
    const newFilters = { ...filters, segment: { ...filters.segment, selected: index } };
    setFilters(newFilters);
  }, [filters]);

  const handleSortChange = useCallback((index) => {
    const newFilters = { ...filters, sortBy: { ...filters.sortBy, selected: index } };
    setFilters(newFilters);
    closeSort();
  }, [filters, closeSort]);

  const handleResetFilters = useCallback(() => {
    setFilters({
      segment: {
        selected: 0,
        items: FILTER_SEGMENT
      },
      sortBy: {
        selected: 0,
        order: SORT_ORDER
      }
    });
  }, []);


  const value = useMemo(() => ({
    menuState,
    openMenu,
    closeMenu,
    toggleMenu,
    selectedTab,
    changeSelectedTab,
    selectedModel,
    changeSelectedModel,
    sortState,
    filterState,
    openSort,
    closeSort,
    toggleSort,
    openFilters,
    closeFilters,
    toggleFilters,
    filters,
    handleSegmentChange,
    handleSortChange,
    handleResetFilters,
  }), [
    menuState,
    openMenu,
    closeMenu,
    toggleMenu,
    selectedTab,
    changeSelectedTab,
    selectedModel,
    changeSelectedModel,
    sortState,
    filterState,
    openSort,
    closeSort,
    toggleSort,
    openFilters,
    closeFilters,
    toggleFilters,
    filters,
    handleSegmentChange,
    handleSortChange,
    handleResetFilters,
  ]);

  return (
    <UIStateContext.Provider value={value}>
      {children}
    </UIStateContext.Provider>
  );
  
}
