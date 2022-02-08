import { Logo, Menu, Vector } from 'assets/assets';
import 'styles/Navbar.scss';

function Navbar() {
  return (
    <div className='nav-wrapper'>
      <div className='menu'>
        <img src= { Menu } alt='menu' className='menu-img'></img>

      </div>

      <div className='logo'>
        <img src={Logo} alt='logo'></img>
      </div>
      <div className='link'>
        <div className='company'>
          <img src={Vector} alt='vector' className='vector'></img>
          <a href='#'>A 가공 업체</a>
        </div>
        <div><span className='divider'></span></div>
        <div className='login'>
          <a href='#'>로그아웃</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;