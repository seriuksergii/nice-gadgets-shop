import React from 'react';
import './TechSpecs.scss';

interface TechSpecsProps {
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera?: string;
  zoom?: string;
  cell?: string[];
  fullSpecs: boolean;
}

export const TechSpecs: React.FC<TechSpecsProps> = ({
  screen,
  resolution,
  processor,
  ram,
  camera,
  zoom,
  cell,
  fullSpecs,
}) => {
  return (
    <section className="tech-specs">
      {fullSpecs && <h3 className="tech-specs__title">Tech specs</h3>}
      <div className="tech-specs__description">
        <div className="tech-specs__labels">
          <span>Screen</span>
          <span>Resolution</span>
          <span>Processor</span>
          <span>RAM</span>
          {fullSpecs && (
            <>
              <span>Camera</span>
              <span>Zoom</span>
              <span>Cell</span>
            </>
          )}
        </div>
        <div className="tech-specs__values">
          <span>{screen}</span>
          <span>{resolution}</span>
          <span>{processor}</span>
          <span>{ram}</span>
          {fullSpecs && (
            <>
              <span>{camera}</span>
              <span>{zoom}</span>
              <span>{cell?.join(', ')}</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
