import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';

import '../Requestcard/RequestCard.scss';
import { IRequest } from '../../utils/constants/Interfaces';

const RequestCard: FC = () => {
  const [serverData, setServerData] = useState<IRequest[] | any>([]);

  useEffect(() => {
    // const getData = axios.get('http://localhost:3001/requests').then((response) => {});

    fetch('http://localhost:3001/requests')
      .then((res) => res.json())
      .then((json) => setServerData(json.splice(0, 6)));
  }, []);

  return (
    <main>
      {serverData.map((card: IRequest, index: number) => (
        <div className='prototype-card' key={index}>
          <div className='prototype-header'>
            <header>
              <h2 className='prototype-title' aria-label='시제품 타이틀'>
                {card.title}
              </h2>
              <div className='badge'>{card.status === '상담중' ? card.status : ''}</div>
            </header>
            <span className='client'>{card.client}</span>
            <time className='due-date'>{card.due}까지 납기</time>
          </div>
          <div className='contour' aria-label='구분선' />
          <div className='table-container'>
            <table>
              <tbody>
                <tr>
                  <th>도면개수</th>
                  <td>{card.count}개</td>
                </tr>
                <tr>
                  <th>총 수량</th>
                  <td>{card.amount}개</td>
                </tr>
                <tr>
                  <th>가공방식</th>
                  <td>{card.method}</td>
                </tr>
                <tr>
                  <th>재료</th>
                  <td>{card.material}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <footer className='btn-container'>
            <button className='show-request-btn'>요청 내역 보기</button>
            <button className='chat-btn'>채팅하기</button>
          </footer>
        </div>
      ))}
    </main>
  );
};

export default RequestCard;
