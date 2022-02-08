export const SET_MATERIAL = 'SET_MATERIAL' as const;
export const SET_METHOD = 'SET_METHOD' as const;
export const SUB_MATERIAL = 'SUB_MATERIAL' as const;
export const SUB_METHOD = 'SUB_METHOD' as const;
export const SET_CONSULT = 'SET_CONSULT' as const;
export const RESET_CONDITION = 'RESET_CONDITION' as const;
export interface setMaterialAction {
  type: typeof SET_MATERIAL;
  materialCondition: string;
}
export const setMaterial = (materialCondition: string): setMaterialAction => {
  return { type: SET_MATERIAL, materialCondition };
};

export interface setMethodAction {
  type: typeof SET_METHOD;
  methodCondition: string;
}
export const setMethod = (methodCondition: string): setMethodAction => {
  return { type: SET_METHOD, methodCondition };
};

export interface subMethodAction {
  type: typeof SUB_METHOD;
  methodCondition: string;
}
export const subMethod = (methodCondition: string): subMethodAction => {
  return { type: SUB_METHOD, methodCondition };
};

export interface subMaterialAction {
  type: typeof SUB_MATERIAL;
  materialCondition: string;
}
export const subMaterial = (materialCondition: string): subMaterialAction => {
  return { type: SUB_MATERIAL, materialCondition };
};

export interface setConsultAction {
  type: typeof SET_CONSULT;
}
export const setConsult = (): setConsultAction => {
  return { type: SET_CONSULT };
};

export interface resetAction {
  type: typeof RESET_CONDITION;
}

export const resetCondition = () => {
  return { type: RESET_CONDITION };
};

export type ReducerActions =
  | setMaterialAction
  | setMethodAction
  | subMethodAction
  | subMaterialAction
  | setConsultAction
  | resetAction;
