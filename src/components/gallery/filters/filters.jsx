import './filters.scss';

import Chevron from '../../../assets/svg/chevron-down.svg?react';
import { useUIState } from '../../../hooks/context/useUIState';

export default function Filters() {

    const {
        sortState,
        filterState,
        closeFilters,
        toggleSort,
        toggleFilters,
        filters,
        handleSegmentChange,
        handleYearChange,
        handleMinPriceChange,
        handleMaxPriceChange,
        handleSortChange,
        handleResetFilters
    } = useUIState();

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

    return (
        <div className="filters-container">

            <div className="filters-header">

                <button onClick={toggleFilters}>
                    Filtrar por
                    <span>
                        <Chevron className={"chevron" + (filterState ? " show" : " hide")} />
                    </span>
                </button>

                <button onClick={toggleSort}>
                    Ordenar por
                    <span>
                        <Chevron className={"chevron" + (sortState ? " show" : " hide")} />
                    </span>
                </button>
            
            </div>

            <div className={"filters-grid" + (filterState ? " show" : " hide")}>

                <div className="filter-group">                    
                    <label htmlFor="segment">Segmento</label>
                    <select 
                        id="segment" 
                        value={filters.segment}
                        onChange={handleSegmentChange}
                        className="filter-select"
                    >
                        <option value="">Todos los segmentos</option>
                        <option value="sedan">Sedán</option>
                        <option value="suv">SUV</option>
                        <option value="coupe">Coupé</option>
                        <option value="wagon">Wagon</option>
                        <option value="hatchback">Hatchback</option>
                        <option value="mpv">MPV</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label htmlFor="year">Año</label>
                    <select 
                        id="year" 
                        value={filters.year}
                        onChange={handleYearChange}
                        className="filter-select"
                    >
                        <option value="">Todos los años</option>
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-group price-slider-group">
                    <label>Precio</label>
                    <div className="price-inputs">
                        <input 
                            id="minPrice" 
                            type="number"
                            min="0"
                            max="99999999"
                            placeholder="Mín"
                            value={filters.minPrice}
                            onChange={handleMinPriceChange}
                            className="price-input-field"
                        />
                        <span className="price-separator">-</span>
                        <input 
                            id="maxPrice" 
                            type="number"
                            min="0"
                            max="99999999"
                            placeholder="Máx"
                            value={filters.maxPrice}
                            onChange={handleMaxPriceChange}
                            className="price-input-field"
                        />
                    </div>
                    <div className="price-sliders">
                        <input 
                            type="range" 
                            min="0"
                            max="99999999"
                            step="1000"
                            value={filters.minPrice || 0}
                            onChange={handleMinPriceChange}
                            className="price-slider min-slider"
                        />
                        <input 
                            type="range" 
                            min="0"
                            max="99999999"
                            step="1000"
                            value={filters.maxPrice || 99999999}
                            onChange={handleMaxPriceChange}
                            className="price-slider max-slider"
                        />
                    </div>
                    <div className="price-labels">
                        <span>0$</span>
                        <span>999.999$</span>
                    </div>
                </div>

                <button className="send-flt" onClick={closeFilters}>Filtrar</button>
                <button className="reset-btn" onClick={handleResetFilters}>Limpiar filtros</button>
            
            </div>

            <div className={"sort-section" + (sortState ? " show" : " hide")}>
                {filters.sortBy.order.map((items, index) => (
                    <button 
                        key={index}
                        className={filters.sortBy.selected === index ? 'active' : ''}
                        onClick={() => handleSortChange(index)}
                    >
                        {items.label}
                    </button>
                ))}
            </div>

        </div>
    );
}