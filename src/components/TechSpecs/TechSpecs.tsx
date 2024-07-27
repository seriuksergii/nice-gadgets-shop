import './TechSpecs.scss';

export const TechSpecs: React.FC = () => {
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
          <span>6.5'' OLED</span>
          <span>2688x1242</span>
          <span>Apple A12 Bionic</span>
          <span>3 GB</span>
          <span>12 MP</span>
          <span>10x</span>
          <span>5G</span>
        </div>
      </div>
    </section>
  );
};

