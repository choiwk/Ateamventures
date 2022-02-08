import { useState, useCallback, useContext } from 'react';
import { filteringContext } from 'App';

import { filterOption } from 'utils/constants/filterOption';
import { setMaterial, subMaterial, setMethod, subMethod, resetCondition } from 'utils/actions';
import material from 'utils/constants/material';
import method from 'utils/constants/method';
import Checkbox from 'components/Filtering/CheckBox';
import { Arrow, Refresh } from 'assets/assets';

import 'styles/Filter.scss';

function Filter() {
  const [methodClick, setMethodClick] = useState<boolean>(false);
  const [materialClick, setMaterialClick] = useState<boolean>(false);
  const { dispatch } = useContext(filteringContext);
  const methodHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    setMethodClick(!methodClick);
  };

  const materialHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    setMaterialClick(!materialClick);
  };

  const resetHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setMethodClick(false);
    setMaterialClick(false);
    dispatch(resetCondition());
  };

  return (
    <div className='btn'>
      <div className='method-checkbox'>
        <span
          className={methodClick ? 'method-default clickBg' : 'method-default'}
          onClick={methodHandler}
        >
          가공방식
          <img src={Arrow} alt='drop-down-arrow' className='drop-icon'></img>
        </span>
        <ul className={methodClick ? 'method click' : 'method hide'}>
          {method.map((i: filterOption) => {
            return (
              <Checkbox
                key={i.id}
                name={i.value}
                setCondition={setMethod}
                subCondition={subMethod}
              />
            );
          })}
        </ul>
      </div>
      <div className={'material-checkbox'}>
        <span
          className={materialClick ? 'material-default clickBg' : 'material-default'}
          onClick={materialHandler}
        >
          재료
          <img src={Arrow} alt='drop-down-arrow' className='drop-icon'></img>
        </span>
        <ul className={materialClick ? 'material click' : 'material hide'}>
          {material.map((i: filterOption) => {
            return (
              <Checkbox
                key={i.id}
                name={i.value}
                setCondition={setMaterial}
                subCondition={subMaterial}
              />
            );
          })}
        </ul>
      </div>
      <div
        className={methodClick || materialClick ? 'refresh-btn click' : 'refresh-btn hide'}
        onClick={resetHandler}
      >
        <div className='refresh-btn-img'>
          <img src={Refresh} alt='refresh btn' className='refresh-img'></img>
        </div>
        <div>
          <p className='refresh-text'>필터링 리셋</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
