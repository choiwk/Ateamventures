import React, { FC, useEffect, useState } from 'react';

import '../Filtering/Filter.scss';

const Filter: FC = () => {
  return (
    <div>
      <section>
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
      </section>
    </div>
  );
};

export default Filter;
