import 'styles/Toggle.scss';

interface Props {
  on: boolean;
  setOn: React.Dispatch<React.SetStateAction<boolean>>;
}

function Toggle({on, setOn}: Props) {
  const toggleBtn = () => {
    setOn(!on);
  };

  return (
    <div className='toggle-btn'>
      <label className='label toggle'>
        <input type='checkbox' className='toggle-input' onChange={toggleBtn}></input>
        <div className='toggle-control'></div>
      </label>
      <div className='toggle-text'>상담 중인 요청만 보기</div>
    </div>
  );
}

export default Toggle;