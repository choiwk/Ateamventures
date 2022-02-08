import { useState, useEffect } from 'react';
import { RequestDB } from 'utils/types';
import instance from 'utils/axios';
import RequestCard from './RequestCard';
import './styles.scss';


export default function ReqeustCardContainer() {
  const [reqData, setReqData] = useState([]);
  useEffect(() => {
    instance
      .get('/requests')
      .then((res) => setReqData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='requestcard-container'>
      {reqData.map((el: RequestDB, id: number) => {
        return <RequestCard requsetDB={el} key={id} />;
      })}
    </div>
  );
}
