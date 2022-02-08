import { Logo, Vector } from 'assets/assets';
import './styles.scss';

export default function MobileMenu() {
  return (
    <>
      <div className='mobile-menu-container'>
        <div className='logo'>
          <img src={Logo} alt='logo'/>
        </div>
        <div className='mobile-link'>
          <div className='company'>
            <img src={Vector} alt='vector' className='vector'></img>
            <a href='#'>파트너정밀가공</a>
          </div>
          <div><span className='divider'></span></div>
          <div className='mobile-login'>
            <a href='#'>로그아웃</a>
          </div>
        </div>
      </div>
    </>
  )
}