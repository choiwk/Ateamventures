import { Logo, Menu, Vector } from 'assets/assets';
import { useState } from 'react';
import 'styles/Navbar.scss';
import MobileMenu from './MobileMenu';

function Navbar() {
  const [click, setClick] = useState(false);

  const menuClick = () => {
    setClick(!click)
  }

  return (
    <>
      {click && <div className='background-div' onClick={menuClick}/>}
      <div className='nav-wrapper'>
        <div className='menu' onClick={menuClick}>
          <img src= { Menu } alt='menu' className='menu-img'/>
        </div>
        <div className='logo'>
          <img src={Logo} alt='logo'/>
        </div>
        <div className='link'>
          <div className='company'>
            <img src={Vector} alt='vector' className='vector'/>
            <a href='#' className='atag'>A 가공 업체</a>
          </div>
          <div>
            <span className='divider'/>
          </div>
          <div className='login'>
            <a href='#' className='atag'>로그아웃</a>
          </div>
        </div>
        {click && <MobileMenu/>}
        </div>
    </>
  );
}

export default Navbar;