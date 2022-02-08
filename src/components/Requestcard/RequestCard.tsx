import React, { FC, useState, useEffect } from 'react';

import '../Requestcard/RequestCard.scss';
import { IRequest } from '../../Interfaces';
const RequestCard: FC = () => {
  const [serverData, setServerData] = useState<IRequest[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/requests')
      .then((res) => res.json())
      .then((json) => setServerData(json));
  }, []);
  console.log(serverData);
  return (
    <main>
      {serverData.map((card: IRequest, index: number) => (
        <div className='prototype-card' key={index}>
          <div className='prototype-header'>
            <h2 className='prototype-title' aria-label='시제품 타이틀'>
              {card.title}
            </h2>
            <span className='client'>{card.client}</span>
            <time className='due-date'>{card.due}까지 납기</time>
          </div>
          <div className='contour' aria-label='구분선' />
        </div>
      ))}
    </main>
  );
};

export default RequestCard;
