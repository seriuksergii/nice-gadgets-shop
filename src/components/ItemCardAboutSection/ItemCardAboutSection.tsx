import './ItemCardAboutSection.scss';
import React from 'react';

interface AboutSectionProps {
  description: {
    title: string;
    text: string[];
  }[];
}

export const ItemCardAboutSection: React.FC<AboutSectionProps> = ({ description }) => {
  return (
    <section className='about'>
      <h3 className='about__title'>About</h3>
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
