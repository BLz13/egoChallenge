import './model-sheet.scss'

import FeaturesSlider from '../model-features-slider/slider';

export default function ModelSheet ({ data }) {
    
  const photo = data?.photo ?? '';
  const name = data?.name ?? '';
  const title = data?.title ?? '';
  const description = data?.description ?? '';
  const features = data?.model_features ?? [];
  const highlights = data?.model_highlights ?? [];

  return (
    <div className='model-sheet-cnt'>
      <div className='model-header'>
        {photo ? (
          <img className='model-img' src={photo} alt={name} />
        ) : (
          <div className='model-img placeholder' aria-hidden="true" />
        )}

        <div className='model-info'>
          <h2 className='model-name'>{name}</h2>
          <h3 className='model-title'>{title}</h3>
          <div className='model-description' dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>

      <div className='features-slider-cnt'>
        <FeaturesSlider features={features} />
      </div>

      <div className='highlights-cnt'>
        {highlights.map((highlight, i) => (
          <div key={highlight.title ?? `${name}-highlight-${i}`} className='highlight-item'>
            {highlight.image ? (
              <img className='highlight-image' src={highlight.image} alt={highlight.title} />
            ) : (
              <div className='highlight-image placeholder' />
            )}
            <div className='highlight-content'>
              <h4 className='highlight-title'>{highlight.title}</h4>
              <div className='highlight-p' dangerouslySetInnerHTML={{ __html: highlight.content ?? '' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
