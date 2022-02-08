import { useEffect, useContext, useCallback, useRef } from 'react';
import { RequestDB } from 'utils/types';
import { filteringContext } from 'App';
import RequestCard from './RequestCard';
import Nothing from 'components/nothing/Nothing';
import './styles.scss';

interface Props {
  reqData: RequestDB[];
}

export default function ReqeustCardContainer({ reqData }: Props) {
  const { materialCondition, methodCondition, consultCondition } = useContext(filteringContext);

  const nothing = useRef<number>(0);
  const filteringCheck = useCallback(
    (request: RequestDB) => {
      let checked_condition = true;
      if (materialCondition.length === 0 && methodCondition.length === 0) {
      } else {
        for (let material of materialCondition) {
          if (!request.material.includes(material)) {
            checked_condition = false;
          }
        }
        for (let method of methodCondition) {
          if (!request.method.includes(method)) {
            checked_condition = false;
          }
        }
      }
      if (consultCondition && request.status !== '상담중') {
        checked_condition = false;
      }
      if (checked_condition) {
        nothing.current++;
      }

      return checked_condition;
    },
    [materialCondition, methodCondition, consultCondition]
  );

  useEffect(() => {
    nothing.current = 0;
  }, [materialCondition, methodCondition, consultCondition]);

  return (
    <>
      <div className='requestcard-container'>
        {reqData.map((el: RequestDB, id: number) => {
          if (filteringCheck(el)) {
            return <RequestCard requsetDB={el} key={id} />;
          }
        })}
      </div>
      {nothing.current === 0 && <Nothing />}
    </>
  );
}
