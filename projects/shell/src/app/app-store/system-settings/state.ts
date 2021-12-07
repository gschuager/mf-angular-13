import { SystemSettings } from './system-settings';

export interface SystemSettingsState {
  loading: boolean;
  systemSettings: SystemSettings;
}

export const initialState: SystemSettingsState = {
  systemSettings: null,
  loading: false,
};
