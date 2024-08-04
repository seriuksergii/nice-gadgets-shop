import { useTranslation } from 'react-i18next';
import './ItemCardAboutSection.scss';
import React from 'react';

interface AboutSectionProps {
  description: {
    title: string;
    text: string[];
  }[];
}

export const ItemCardAboutSection: React.FC<AboutSectionProps> = ({ description }) => {
  const { t } = useTranslation();
  return (
    <section className='about'>
      <h3 className='about__title'>{t('product_page.about')}</h3>
      {description.map((section, index) => (
        <React.Fragment key={index}>
          <h4 className='about__paragraph-title'>{section.title}</h4>
          {section.text.map((paragraph, pIndex) => (
            <p key={pIndex} className='about__paragraph-body'>
              {paragraph}
            </p>
          ))}
        </React.Fragment>
      ))}
    </section>
  );
};
