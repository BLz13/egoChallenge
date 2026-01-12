import './filters.scss';

import Chevron from '../../../assets/svg/chevron-down.svg?react';
import { useUIState } from '../../../hooks/context/useUIState';

export default function Filters() {

    const {
        sortState,
        filterState,
        toggleSort,
        toggleFilters,
        filters,
        handleSegmentChange,
        handleSortChange,
    } = useUIState();

    const filtersSegment = filters.segment;

    return (
        <div className="filters-container">

            <div className="filters-header">

                <button onClick={toggleFilters}>
                    Filtrar por
                    <span>
                        <Chevron className={"chevron filter" + (filterState ? " show" : " hide")} />
                    </span>
                </button>

                <div className='filters-desktop'>
                    {filtersSegment.items.map((item, index) => (
                        <button
                            key={item.value}
                            className={ (index === filtersSegment.selected) ? "filter-segment-btn active" : "filter-segment-btn" }
                            onClick={() => handleSegmentChange(index)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>                

                <button onClick={toggleSort}>
                    Ordenar por
                    <span>
                        <Chevron className={"chevron order" + (sortState ? " show" : " hide")} />
                    </span>
                </button>
            
            </div>

            <div className={"filters-grid" + (filterState ? " show" : " hide")}>
                {filtersSegment.items.map((item, index) => (
                    <button
                        key={item.value}
                        className={ (index === filtersSegment.selected) ? "filter-segment-btn active" : "filter-segment-btn" }
                        onClick={() => {
                            handleSegmentChange(index);
                            toggleFilters();
                        }}
                    >
                        {item.label}
                    </button>
                ))}               
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