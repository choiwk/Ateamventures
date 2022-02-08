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
  index: number;
  checkList: boolean[];
  check: React.Dispatch<any>;
}
function CheckBox({ name, setCondition, subCondition, index, checkList, check }: Props) {
  const [checked, setChecked] = useState(false);
  const { materialCondition, methodCondition, dispatch } = useContext(filteringContext);
  const changeCondition = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!checkList[index]) {
        dispatch(setCondition(e.target.value));
      } else {
        dispatch(subCondition(e.target.value));
      }
      let temp = [...checkList];
      temp[index] = !temp[index];
      check(temp);
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
            checked={checkList[index]}
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

export default React.memo(CheckBox);
