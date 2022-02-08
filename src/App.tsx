import React, { useState, useEffect, Dispatch, createContext, useReducer, useMemo } from 'react';
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';

import RequestCardContainer from 'components/Requestcard/RequestCardContainer';
import instance from 'utils/axios';
import {
  SET_CONSULT,
  SET_MATERIAL,
  SET_METHOD,
  SUB_METHOD,
  SUB_MATERIAL,
  ReducerActions,
  RESET_CONDITION,
} from 'utils/actions';
import { RequestDB } from 'utils/types';
import 'styles/App.css';
interface Context {
  materialCondition: string[];
  methodCondition: string[];
  consultCondition: boolean;
  dispatch: Dispatch<any>;
}

export const filteringContext = createContext<Context>({
  materialCondition: [],
  methodCondition: [],
  consultCondition: false,
  dispatch: () => {},
});

interface ReducerState {
  materialCondition: string[];
  methodCondition: string[];
  consultCondition: boolean;
}

const initialState: ReducerState = {
  materialCondition: [],
  methodCondition: [],
  consultCondition: false,
};

const reducer = (state = initialState, action: ReducerActions): ReducerState => {
  switch (action.type) {
    case SET_MATERIAL: {
      const temp = [...state.materialCondition, action.materialCondition];
      return {
        ...state,
        materialCondition: temp,
      };
    }
    case SET_METHOD: {
      const temp = [...state.methodCondition, action.methodCondition];
      return {
        ...state,
        methodCondition: temp,
      };
    }
    case SUB_MATERIAL: {
      const temp = state.materialCondition.filter(
        (material) => action.materialCondition !== material
      );
      return {
        ...state,
        materialCondition: temp,
      };
    }
    case SUB_METHOD: {
      const temp = state.methodCondition.filter((method) => action.methodCondition !== method);
      return {
        ...state,
        methodCondition: temp,
      };
    }

    case SET_CONSULT: {
      return {
        ...state,
        consultCondition: !state.consultCondition,
      };
    }

    case RESET_CONDITION: {
      return {
        materialCondition: [],
        methodCondition: [],
        consultCondition: false,
      };
    }
    default:
      return state;
  }
};
function App() {
  const [reqData, setReqData] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const { materialCondition, methodCondition, consultCondition } = state;
  const value = useMemo(
    () => ({ methodCondition, materialCondition, consultCondition, dispatch }),
    [materialCondition, methodCondition, consultCondition]
  );
  useEffect(() => {
    instance
      .get('/requests')
      .then((res) => setReqData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <filteringContext.Provider value={value}>
        <Header />
        <RequestCardContainer reqData={reqData} />
      </filteringContext.Provider>
    </>
  );
}

export default App;
