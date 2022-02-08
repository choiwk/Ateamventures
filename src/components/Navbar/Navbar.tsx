import { Logo, Vector } from 'assets/assets';
import 'styles/Navbar.scss';

function Navbar() {
  return (
    <div className='nav-wrapper'>
      <div className='logo'>
        <img src={Logo} alt='logo'></img>
      </div>
      <div className='link'>
        <div className='company'>
          <img src={Vector} alt='vector' className='vector'></img>
          <button>A 가공 업체</button>
        </div>
        <div><span className='divider'></span></div>
        <div className='login'>
          <button>로그아웃</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;