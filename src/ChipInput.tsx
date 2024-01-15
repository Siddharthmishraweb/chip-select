// import React, { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from 'react';
// import './ChipInput.css';

// interface ChipInputProps {
//   items: {
//     image_center_text: string;
//     name: string;
//     mail: string;
//   }[];
// }

// const ChipInput: React.FC<ChipInputProps> = ({ items }) => {
//   const [inputValue, setInputValue] = useState<string>('');
//   const [selectedItems, setSelectedItems] = useState<string[]>([]);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const [isInputFocused, setIsInputFocused] = useState(false);

//   const handleInputFocus = () => {
//     setIsInputFocused(true);
//   };

//   const handleInputBlur = () => {
//     setIsInputFocused(false);
//   };

//   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//   };

//   const handleItemSelection = (item: { image_center_text: string; name: string; mail: string }) => {
//     setSelectedItems([...selectedItems, item.name]);
//     setInputValue('');
//   };

//   const handleChipRemoval = (index: number) => {
//     const updatedItems = [...selectedItems];
//     updatedItems.splice(index, 1);
//     setSelectedItems(updatedItems);
//   };

//   const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Backspace' && inputValue === '') {
//       const lastChipIndex = selectedItems.length - 1;
//       if (lastChipIndex >= 0) {
//         handleChipRemoval(lastChipIndex);
//       }
//     }
//   };

//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [selectedItems]);

// return (
//     <div className="chip-input-container">
//       <div className="selected-options">
//         {selectedItems.map((item, index) => (
//           <div key={index} className="selected-option">
//             {item} <span onClick={() => handleChipRemoval(index)}>X</span>
//           </div>
//         ))}
//       </div>
//       <input
//         ref={inputRef}
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         onKeyDown={handleInputKeyDown}
//         placeholder="Type to search..."
//         onFocus={handleInputFocus}
//         onBlur={handleInputBlur}
//       />
//       { (
//         <ul className="item-list">
//           {items
//             .filter(
//               (item) =>
//                 !selectedItems.includes(item.name) &&
//                 item.name.toLowerCase().includes(inputValue.toLowerCase())
//             )
//             .map((item, index) => (
//               <li key={index} onClick={() => handleItemSelection(item)}>
//                 {item.name.toLowerCase().includes(inputValue.toLowerCase()) ? (
//                   <>
//                     {item.name.substring(0, item.name.indexOf(inputValue))}
//                     <span className="highlight">{inputValue}</span>
//                     {item.name.substring(item.name.indexOf(inputValue) + inputValue.length)}
//                   </>
//                 ) : (
//                     <>
//                     <span>
//                         {item.name}
//                     </span></>
                  
//                 )}{' '}
//                 - <span style={{color:'GrayText'}}>{item.mail}</span>
//               </li>
//             ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ChipInput;


import React, { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from 'react';
import './ChipInput.css';

interface ChipInputProps {
  items: {
    image_center_text: string;
    name: string;
    mail: string;
  }[];
}

const ChipInput: React.FC<ChipInputProps> = ({ items }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleItemSelection = (item: { image_center_text: string; name: string; mail: string }) => {
    setSelectedItems([...selectedItems, item.name]);
    setInputValue('');
  };

  const handleChipRemoval = (index: number) => {
    const updatedItems = [...selectedItems];
    updatedItems.splice(index, 1);
    setSelectedItems(updatedItems);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && inputValue === '') {
      const lastChipIndex = selectedItems.length - 1;
      if (lastChipIndex >= 0) {
        handleChipRemoval(lastChipIndex);
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedItems]);

  return (
    <div className="chip-input-container">
      <div className="input-container">
        {selectedItems.map((item, index) => (
          <div key={index} className="selected-option">
            {item} <span onClick={() => handleChipRemoval(index)}>X</span>
          </div>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Type to search..."
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
      {isInputFocused && (
        <ul className="item-list">
          {items
            .filter(
              (item) =>
                !selectedItems.includes(item.name) &&
                item.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((item, index) => (
              <li key={index} onClick={() => handleItemSelection(item)}>
                {item.name.toLowerCase().includes(inputValue.toLowerCase()) ? (
                  <>
                    {item.name.substring(0, item.name.indexOf(inputValue))}
                    <span className="highlight">{inputValue}</span>
                    {item.name.substring(item.name.indexOf(inputValue) + inputValue.length)}
                  </>
                ) : (
                  item.name
                )}{' '}
                - <span style={{ color: 'GrayText' }}>{item.mail}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default ChipInput;
