import React, { FC } from 'react';

import '../Navbar/Nav.scss';

const Nav: FC = () => {
  return (
    <>
      <nav>
        <div className='gnb-left'>
          <h2 className='sm-hidden'>
            <img src='assets/images/title.png' alt='타이틀 로고' />
          </h2>
        </div>
        <div className='gnb-right'>
          <img className='processor-logo' src='assets/images/Vector.png' alt='가공업체 로고' />
          <p>A 가공 업체</p>
          <img className='divider' src='assets/images/divider.png' alt='나눔 선' />
          <button className='logout-btn'>로그아웃</button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
