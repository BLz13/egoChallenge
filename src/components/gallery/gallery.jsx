import './gallery.scss';

import { useEffect, useState } from "react";

import LoadingScreen from '../loading-screen/loading';
import { getModels } from "../../services/models"
import { useUIState } from '../../hooks/context/useUIState';

export default function Gallery() {

    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);
    const { selectedModel, changeSelectedModel, filters } = useUIState()

    useEffect(() => {
    const fetchModels = async (queryFilters) => {
        try {
        setLoading(true);
        const data = await getModels(queryFilters);
        const modelsList = data.response || data;
        setModels(Array.isArray(modelsList) ? modelsList : []);
        } catch (err) {
        console.error('Fetch error:', err);
        } finally {
        setLoading(false);
        }
    };

    // Build the API-friendly filters object from the UI state
    const buildQueryFilters = () => {
        const q = {};

        // segment: extract selected item's value if present
        if (filters?.segment?.items && typeof filters.segment.selected === 'number') {
        const selIndex = filters.segment.selected;
        const selItem = filters.segment.items[selIndex];
        if (selItem && selItem.value != null) q.segment = selItem.value;
        }

        // ordering: extract selected sort key if your sort items expose a value
        if (filters?.sortBy?.order && typeof filters.sortBy.selected === 'number') {
        const selSort = filters.sortBy.order[filters.sortBy.selected];
        if (selSort && selSort.value) {
            q.ordering = selSort.value;
        } else if (selSort && selSort.label) {
            // fallback if sort items only have label — adapt to your API expected param
            q.ordering = selSort.label;
        }
        }

        // year, price range — convert to primitive values if present
        if (filters?.year) q.year = filters.year;
        if (filters?.minPrice) q.min_price = Number(filters.minPrice);
        if (filters?.maxPrice) q.max_price = Number(filters.maxPrice);

        return q;
    };

    const qFilters = buildQueryFilters();
    fetchModels(qFilters);
    }, [filters]); // rerun whenever filters change


    if (loading) {
        return <LoadingScreen />;
    }

    return (
         <div className="gallery-cnt">
            {models?.map(model => 
                <span
                    key={model.id}
                    className={"model-cnt"}
                >
                    <p className="model-name">{model.name}</p>
                    <span className="model-info">
                        <p className="model-year">{model.year}</p>
                        <span className='middle-divider'></span>
                        <p className="model-price">$ {Number(model.price).toLocaleString('es-ES')}</p>
                    </span>
                    <img src={model.thumbnail} alt={model.name} className="model-photo"/>
                    <button
                        className={(model.id === selectedModel ? 'see-model show' : 'see-model')}
                        onClick={() => changeSelectedModel(model.id)}
                    >
                        Ver modelo
                    </button>
                </span>
            )}
        </div>
    )
}