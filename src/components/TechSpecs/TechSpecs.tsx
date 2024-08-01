import React from 'react';
import './TechSpecs.scss';
import { Product } from '../../types';

type TechSpecsProps = Pick<Product, 'screen' | 'resolution' | 'processor' | 'ram' | 'camera' | 'zoom' | 'cell'>;

export const TechSpecs: React.FC<TechSpecsProps> = ({
  screen,
  resolution,
  processor,
  ram,
  camera,
  zoom,
  cell,
}) => {
  return (
    <section className="tech-specs">
      <h3 className="tech-specs__title">Tech specs</h3>
      <div className="tech-specs__description">
        <div className="tech-specs__labels">
          <span>Screen</span>
          <span>Resolution</span>
          <span>Processor</span>
          <span>RAM</span>
          <span>Camera</span>
          <span>Zoom</span>
          <span>Cell</span>
        </div>
        <div className="tech-specs__values">
          <span>{screen}</span>
          <span>{resolution}</span>
          <span>{processor}</span>
          <span>{ram}</span>
          <span>{camera}</span>
          <span>{zoom}</span>
          <span>{cell.join(', ')}</span>
        </div>
      </div>
    </section>
  );
};
