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

  return (
    <main>
      {serverData.map((card: IRequest, index: number) => (
        <div className='prototype-card' key={index}>
          <h2 className='prototype-title' aria-label='시제품 타이틀'>
            {card.title}
          </h2>
        </div>
      ))}
    </main>
  );
};

export default RequestCard;
