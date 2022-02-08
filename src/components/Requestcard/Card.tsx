import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Data } from 'components/Requestcard/interfaces';
import RequestBtn from 'components/Requestcard/requestBtn';
import ChatBtn from 'components/Requestcard/chatBtn';

import 'styles/Card.scss';
import Badge from './Badge';

function Card() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    axios.get('http://localhost:4000/requests').then((response) => setData(response.data));
  }, []);

  return (
    <div className='card-wrapper'>
      {data.map((i: Data) => {
        return(
          <div className='card' key={i.id}>
            <div className='top'>
              <div className='top-text'>
                <h3 className='title'>{i.title}</h3>
                <p className='client'>{i.client}</p>
              </div>
              <div className='top-badge'>{i.status === '상담중' ? <Badge /> : null}</div>
            </div>
            <p className='due'>{i.due}까지 납기</p>
            <div className='line'></div>
            <p>도면개수 <span className='count'>{i.count}</span></p>
            <p>총 수량 <span className='amount'>{i.amount}</span></p>
            <p>가공방식 <span className='count'>{i.method}</span></p>
            <p>재료 <span className='count'>{i.material}</span></p>
            <div className='btn'>
              <div className='r-btn'>
                <RequestBtn />
              </div>
              <div className='c-btn'>
                <ChatBtn />
              </div>
            </div>
            
          </div>
      )}
      )}
    </div>
  );
}
export default Card;