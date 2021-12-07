import { ActionReducer, ActionReducerMap } from '@ngrx/store';


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {
}

export const reducers: ActionReducerMap<State> = {
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (state: State, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();
    return result;
  };
}
