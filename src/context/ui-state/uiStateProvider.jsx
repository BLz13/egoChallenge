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

  //SELECTED MODEL

  const [selectedModel, setSelectedModel] = useState("");

  const changeSelectedModel = useCallback((model) => {
    setSelectedModel(model);
  }, []);
  
  //TABS CONTROLS
  
  const [selectedTab, setSelectedTab] = useState(0);

  const changeSelectedTab = useCallback((i) => {
    setSelectedTab(i);
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
    segment: '',
    year: '',
    minPrice: '',
    maxPrice: '',
    sortBy: {
      selected: 0,
      order: [
        {
          value: 'none',
          label: 'Sin ordenar'
        },
        {
          value: 'price-asc',
          label: 'Precio: Menor a Mayor'
        },
        {
          value: 'price-desc',
          label: 'Precio: Mayor a Menor'
        },
        {
          value: 'year-newest',
          label: 'Año: Más Reciente'
        },
        {
          value: 'year-oldest',
          label: 'Año: Más Antiguo'
        }
      ]
    }
  });

  const handleSegmentChange = useCallback((e) => {
    const newFilters = { ...filters, segment: e.target.value };
    setFilters(newFilters);
  }, [filters]);

  const handleYearChange = useCallback((e) => {
    const newFilters = { ...filters, year: e.target.value };
    setFilters(newFilters);
  }, [filters]);

  const handleMinPriceChange = useCallback((e) => {
    const newFilters = { ...filters, minPrice: e.target.value };
    setFilters(newFilters);
  }, [filters]);

  const handleMaxPriceChange = useCallback((e) => {
    const newFilters = { ...filters, maxPrice: e.target.value };
    setFilters(newFilters);
  }, [filters]);

  const handleSortChange = useCallback((index) => {
    const newFilters = { ...filters, sortBy: { ...filters.sortBy, selected: index } };
    setFilters(newFilters);
    closeSort();
  }, [filters, closeSort]);

  const handleResetFilters = useCallback(() => {
    const resetFilters = {
        segment: '',
        year: '',
        minPrice: '',
        maxPrice: '',
        sortBy: 'none'
    };
    setFilters(resetFilters);
  }, []);

  const value = useMemo(() => ({
    menuState,
    openMenu,
    closeMenu,
    toggleMenu,
    selectedModel,
    changeSelectedModel,
    selectedTab,
    changeSelectedTab,
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
    handleYearChange,
    handleMinPriceChange,
    handleMaxPriceChange,
    handleSortChange,
    handleResetFilters,
  }), [
    menuState,
    openMenu,
    closeMenu,
    toggleMenu,
    selectedModel,
    changeSelectedModel,
    selectedTab,
    changeSelectedTab,
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
    handleYearChange,
    handleMinPriceChange,
    handleMaxPriceChange,
    handleSortChange,
    handleResetFilters,
  ]);

  return (
    <UIStateContext.Provider value={value}>
      {children}
    </UIStateContext.Provider>
  );
  
}
