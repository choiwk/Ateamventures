import { useEffect, useState } from 'react';
import axios from 'axios';
import { Data } from 'components/Requestcard/interfaces';
import Filter from 'components/Filtering/Filter';
import Toggle from 'components/Header/Toggle';

import 'styles/Header.scss';

function Header() {
  const [status, setStatus] = useState<Data[]>([]);
  const [on, setOn] = useState<boolean>(false);

  useEffect(() => {
    axios.get('http://localhost:4000/requests').then((response) => setStatus(response.data));
    if (on) {
      axios.get('http://localhost:4000/requests?status=상담중')
        .then((response) => setStatus(response.data));
    }
  }, [on]);

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