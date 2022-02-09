import React, { FC, useEffect, useState } from 'react';

import material from 'utils/constants/Materials';
import method from 'utils/constants/Methods';
import CheckBox from './CheckBox/CheckBox';
import '../Filtering/Filter.scss';

const Filter: FC = () => {
  const [filtersBox, setFiltersBox] = useState<any>({ method: [], material: [] });

  const showFilterResults = (filters: any) => {};

  const handleFilters = (filters: any, category: any) => {
    console.log(filters);
    const newFilters = { ...filtersBox };
    console.log(newFilters);
    newFilters[category] = filters;
    if (category === 'material') {
    }
    showFilterResults(newFilters);
    setFiltersBox(newFilters);
  };

  return (
    <div>
      <CheckBox handleFilters={handleFilters} />
      {/* <section>
        <select name='processing' id='process-combox'>
          <option value='default' disabled>
            가공방식
          </option>
          <option value='밀링'>밀링</option>
          <option value='선반'>선반</option>
        </select>
        <select name='materials' id='materials-combox'>
          <option value='default' disabled>
            재료
          </option>
          <option value='알루미늄'>알루미늄</option>
          <option value='탄소강'>탄소강</option>
          <option value='구리'>구리</option>
          <option value='합금강'>합금강</option>
          <option value='강철'>강철</option>
        </select>
      </section> */}
    </div>
  );
};

export default Filter;
