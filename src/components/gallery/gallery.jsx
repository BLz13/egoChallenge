import './gallery.scss';

import { useEffect, useState } from "react";

import { getModels } from "../../services/models"
import { useUIState } from '../../hooks/context/useUIState';
import LoadingScreen from '../loading-screen/loading';

export default function Gallery() {

    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);
    const { selectedModel, changeSelectedModel } = useUIState()

    useEffect(() => {
        const fetchModels = async () => {
            try {
                setLoading(true);
                const data = await getModels();
                const modelsList = data.response || data;
                setModels(Array.isArray(modelsList) ? modelsList : []);
            } catch (err) {
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchModels();
    }, []);

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