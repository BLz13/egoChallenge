import './tab-2.scss';

import { useEffect, useState } from 'react';

import { getModelSpecs } from '../../../services/modelSpecs';
import { useUIState } from '../../../hooks/context/useUIState';

export default function Tab2 () {

    const [modelData, setModelData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const { selectedModel } = useUIState()

    useEffect(() => {
        if (!selectedModel) {
            setModelData(null);
            return;
        }

        const fetchModelData = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getModelSpecs(selectedModel);
                const modelsList = data.response || data;
                
                // If it's an array, get the first item; otherwise use the object directly
                const specs = Array.isArray(modelsList) ? modelsList[0] : modelsList;
                setModelData(specs);
                setCurrentSlide(0);
            } catch (err) {
                console.error('Fetch error:', err);
                setError(err.message);
                setModelData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchModelData();
    }, [selectedModel]);

    // Handle keyboard navigation
    useEffect(() => {
        if (!modelData?.model_features) return;

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                goToPrevSlide();
            } else if (e.key === 'ArrowRight') {
                goToNextSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide, modelData]);

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % modelData.model_features.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + modelData.model_features.length) % modelData.model_features.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!modelData) {
        return <div>Selecciona un modelo</div>;
    }

    return (
        <main className="tab-2-cnt">

            <div className='model-header'>
                <img className='model-img' src={modelData.photo} alt={modelData.name} />
                <div className='model-info'>
                    <h2 className='model-name'>{modelData.name}</h2>
                    <h3 className='model-title'>{modelData.title}</h3>
                    <div className='model-description' dangerouslySetInnerHTML={{ __html: modelData.description }} />
                </div>
            </div>



            <div className='highlights-cnt'>
                {modelData.model_highlights?.map(highlight => 
                    <div key={highlight.title} className='highlight-item'>
                        <img className='highlight-image' src={highlight.image} alt={highlight.title} />
                        <div className='highlight-content'>
                            <h4 className='highlight-title'>{highlight.title}</h4>
                            <div className='highlight-content' dangerouslySetInnerHTML={{ __html: highlight.content }} />
                        </div>
                    </div>
                )}
            </div>
            
        </main>
    )
} 