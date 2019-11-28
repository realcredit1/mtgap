import {Account, LatestSettings} from 'root/app/settings_store';
import {CardPlayed} from 'root/models/cards';

export interface Messages {
  'token-input': Account;
  'minimize-me': undefined;
  'set-settings': LatestSettings;
  'kill-current-token': undefined;
  'set-log-path': undefined;
  'default-log-path': undefined;
  'old-log': undefined;
  'wipe-all': undefined;
  'check-updates': undefined;
  'stop-tracker': undefined;
  'apply-update': undefined;
  'set-creds': {
    account: Account;
    source: string;
  };
  'show-prompt': {message: string; autoclose: number};
  'new-account': undefined;
  'show-status': {color: string; message: string};
  'set-screenname': string;
  'match-started': {
    matchId: string;
    uid: string;
    seatId: number;
    gameNumber: number;
  };
  'set-version': string;
  'show-update-button': undefined;
  'set-setting-autorun': boolean;
  'set-setting-minimized': boolean;
  'set-setting-manualupdate': boolean;
  'set-setting-overlay': boolean;
  'set-setting-icon': string;
  'match-over': undefined;
  'card-played': CardPlayed;
}