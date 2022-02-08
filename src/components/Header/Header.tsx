import React, { FC } from 'react';

import '../Header/Header.scss';

const Header: FC = () => {
  return (
    <header>
      <strong>들어온 요청</strong>
      <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
    </header>
  );
};

export default Header;
