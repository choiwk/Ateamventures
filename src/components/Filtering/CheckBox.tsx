import React, { useCallback, useState, useContext } from 'react';
import { filteringContext } from 'App';
import {
  setMethodAction,
  subMethodAction,
  subMaterialAction,
  setMaterialAction,
} from 'utils/actions';
interface Props {
  name: string;
  setCondition: (condition: string) => setMethodAction | setMaterialAction;
  subCondition: (condition: string) => subMethodAction | subMaterialAction;
}
function CheckBox({ name, setCondition, subCondition }: Props) {
  const [checked, setChecked] = useState(false);
  const { materialCondition, methodCondition, dispatch } = useContext(filteringContext);
  const changeCondition = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target);
      if (!checked) {
        dispatch(setCondition(e.target.value));
      } else {
        dispatch(subCondition(e.target.value));
      }
      setChecked(!checked);
    },
    [materialCondition, methodCondition]
  );
  return (
    <>
      <li>
        <div className='method-container'>
          <input
            className='method-input'
            type='checkbox'
            id={name}
            value={name}
            onChange={changeCondition}
          />
          <label htmlFor={name} className='custom-checkbox'>
            {name}
          </label>
        </div>
      </li>
    </>
  );
}

export default CheckBox;
