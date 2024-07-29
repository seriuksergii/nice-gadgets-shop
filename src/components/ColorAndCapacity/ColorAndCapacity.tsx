import React, { useState } from 'react';
import './ColorAndCapacity.scss';

const colors = ['#FCDBC1', '#5F7170', '#4C4C4C', '#F0F0F0'];
const capacities = ['64 GB', '256 GB', '512 GB'];

export const ColorAndCapacity: React.FC = () => {
  const [modelColor, setModelColor] = useState<string>('#FCDBC1');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('64 GB');

  const handleColorClick = (color: string) => {
    setModelColor(color);
  };

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  return (
    <div className="color-and-capacity">
      <h1 className="color-and-capacity__title">Available Colors</h1>
      <div className="color-and-capacity__color-palette">
        {colors.map((color) => (
          <div
            key={color}
            className={`color-and-capacity__color-circle ${
              modelColor === color ? 'color-and-capacity__color-circle--active' : ''
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
      <div className="color-and-capacity__capacity-selection">
        <h2 className="color-and-capacity__capacity-title">Select Capacity</h2>
        <div className="color-and-capacity__capacity-blocks">
          {capacities.map((capacity) => (
            <div
              key={capacity}
              className={`color-and-capacity__capacity-block ${
                selectedCapacity === capacity ? 'color-and-capacity__capacity-block--active' : ''
              }`}
              role="button"
              onClick={() => handleCapacityClick(capacity)}
            >
              {capacity}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
