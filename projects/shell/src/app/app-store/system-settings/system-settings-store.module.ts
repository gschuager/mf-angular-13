import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SystemSettingsEffects } from './effects';
import { SYSTEM_SETTINGS_KEY } from './key';
import { reducer } from './reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(SYSTEM_SETTINGS_KEY, reducer),
    EffectsModule.forFeature([SystemSettingsEffects])
  ]
})
export class SystemSettingsStoreModule { }
