import React, { useState, useEffect } from 'react';

import '../CheckBox/CheckBox.scss';
import material from 'utils/constants/Materials';
import method from 'utils/constants/Methods';

interface Iprops {
  handleFilters: (filters?: any, category?: any) => void;
}

const CheckBox = ({ handleFilters }: Iprops) => {
  const [checkList, setCheckList] = useState<boolean[]>([]);
  const [checked, setChecked] = useState<number[]>([]);

  const handleToggle = (value: number) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    handleFilters(newChecked);
  };
  return (
    <ul className='method click'>
      {method.map((value, index: number) => (
        <li key={index}>
          <div className='method-container'>
            <input
              className='method-input'
              type='checkbox'
              value={value.id}
              checked={checked.indexOf(value.id) === -1 ? false : true}
              onChange={() => handleToggle(value.id)}
              onClick={() => console.log()}
            />
            <label htmlFor={value.value} className='custom-checkbox'>
              {value.value}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CheckBox;
