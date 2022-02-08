import Button from './Button';
import { RequestDB } from 'utils/types';
import './styles.scss';
import Badge from './Badge';

type GreetingProps = {
  requsetDB: RequestDB;
};
export default function RequestCard({ requsetDB }: GreetingProps) {
  const { title, client, due, count, amount, method, material, status, docs } = requsetDB;
  return (
    <div className='requestdata-container'>
      <div className='title-container'>
        <div>
        <h2>{title}</h2>
        <h3>{client}</h3>
        <h4>{due}까지 납기</h4>
        </div>
        <div>
          {status === '상담중' && <Badge />}
        </div>
      </div>
      <div className='horizontal-line'/>
      <div>
        <ul>
          <li>
            <div>도면개수</div>
            <div>{count}개</div>
          </li>
          <li>
            <div>총 수량</div>
            <div>{amount}개</div>
          </li>
          <li>
            <div>가공방식</div>
            <div>{method.join(', ')}</div>
          </li>
          <li>
            <div>재료</div>
            <div>{material.join(', ')}</div>
          </li>
        </ul>
      </div>
      <div>
        <Button props={{ title: '요청 내역 보기', background: '#2196F3', color: '#fff' }} />
        <Button props={{ title: '채팅하기', background: '#fff', color: '#2196F3' }} />
      </div>
    </div>
  );
}
