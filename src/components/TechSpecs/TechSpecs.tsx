import React from 'react';
import './TechSpecs.scss';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <section className="tech-specs">
      {fullSpecs && <h3 className="tech-specs__title">{t('product_page.tech_spec_title')}</h3>}
      <div className="tech-specs__description">
        <div className="tech-specs__labels">
          <span>{t('product_page.screen')}</span>
          <span>{t('product_page.resolution')}</span>
          <span>{t('product_page.processor')}</span>
          <span>{t('product_page.ram')}</span>
          {fullSpecs && (
            <>
              <span>{t('product_page.camera')}</span>
              <span>{t('product_page.zoom')}</span>
              <span>{t('product_page.cell')}</span>
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
