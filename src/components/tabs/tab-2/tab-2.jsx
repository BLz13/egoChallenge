import { useEffect, useState } from 'react';

import LoadingScreen from '../../loading-screen/loading';
import ModelSheet from '../../model-sheet/model-sheet';
import { getModelSpecs } from '../../../services/modelSpecs';
import { useUIState } from '../../../hooks/context/useUIState';

export default function Tab2 () {

  const [modelData, setModelData] = useState(null);
  const [loading, setLoading] = useState(false);

  const { selectedModel } = useUIState();

  useEffect(() => {
    if (!selectedModel) {
      setModelData(null);
      return;
    }

    const fetchModelData = async () => {
      try {
        setLoading(true);
        const data = await getModelSpecs(selectedModel);
        const modelsList = data.response || data;
        const specs = Array.isArray(modelsList) ? modelsList[0] : modelsList;
        setModelData(specs);
      } catch (err) {
        console.error('Fetch error:', err);
        setModelData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchModelData();
  }, [selectedModel]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!modelData) {
    return <div className="no-data">No se encontraron datos del modelo.</div>;
  }

  return <ModelSheet data={modelData} />;
}
