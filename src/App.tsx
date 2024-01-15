import React from 'react';
import ChipInput from './ChipInput';

const App: React.FC = () => {
  const sampleItems = [
    {
      image_center_text: 'N',
      name: 'Nick Gianaopulas',
      mail: 'n.giana@example.com',
    },
    {
      image_center_text: 'A',
      name: 'Anita Gros',
      mail: 'a.gros@example.com',
    },
    {
      image_center_text: 'M',
      name: 'Megan Smith',
      mail: 'm.smith@example.com',
    },
    {
      image_center_text: 'L',
      name: 'Legan Smith',
      mail: 'l.smith@example.com',
    },
  ];

  return (
    <div>
      <h1>Chip Input Example</h1>
      <ChipInput items={sampleItems} />
    </div>
  );
};

export default App;
