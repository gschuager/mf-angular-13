import { createAction, props } from '@ngrx/store';
import { SystemSettings } from './system-settings';

const prefix = '[SystemSettings] ';

export const load = createAction(prefix + 'Load Settings', props<{ readNoCache: boolean }>());

export const loadSuccessOrUpdated = createAction(prefix + 'Load Success Or Updated', props<{
  systemSettings: SystemSettings
}>());
