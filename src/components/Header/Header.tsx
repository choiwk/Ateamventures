import { useState } from 'react';
import Filter from 'components/Filtering/Filter';
import Toggle from 'components/Header/Toggle';

import 'styles/Header.scss';

function Header() {
  const [on, setOn] = useState<boolean>(false);

  return (
    <div className='header-wrapper'>
      <h1 className='header-title'>들어온 요청</h1>
      <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      <div className='header-function'>
        <div className='header-filter'>
          <Filter />
        </div>
        <div className='header-toggle'>
          <Toggle on={on} setOn={setOn} />
        </div>
      </div>
    </div>
  );
}

export default Header;
