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
                  <td>
                    {card.material.length > 1
                      ? card.material[0] + ', ' + card.material[1]
                      : card.material}
                  </td>
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
