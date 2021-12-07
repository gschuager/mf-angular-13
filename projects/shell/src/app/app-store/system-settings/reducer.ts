import { createReducer, on, Action } from '@ngrx/store';
import { SystemSettingsState, initialState } from './state';
import * as Actions from './actions';

const systemSettingsReducer = createReducer(
  initialState,
  on(Actions.load, (state) => ({
    loading: true,
    systemSettings: null
  })),
  on(Actions.loadSuccessOrUpdated, (state: SystemSettingsState, { systemSettings }) => (
    {
      loading: false,
      systemSettings
    }))
);

export function reducer(state: SystemSettingsState | undefined, action: Action) {
  return systemSettingsReducer(state, action);
}
