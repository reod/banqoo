import { Injectable } from '@angular/core';
import { AppState } from './../../app.component';

@Injectable()
export class PersistanceService {

  private vesrion: string = '0.0.2';
  private key: string = 'app-state';

  getSavedState(): AppState {
    let appState = null;
    let state = null;

    try {
      state = localStorage.getItem(this.key);
      state = JSON.parse(state);
    } catch (e) {
      console.warn('Unable to get app state:', e);
    }

    if (state.version === this.vesrion) {
      appState = state;
    }

    return appState;
  }

  saveState(state: AppState): void {
    const versionedState = Object.assign({}, state, { version: this.vesrion });
    const stateStr = JSON.stringify(versionedState);

    localStorage.setItem(this.key, stateStr);
  }
}
