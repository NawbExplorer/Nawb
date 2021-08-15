import { makeAutoObservable } from 'mobx';

export default class SettingProvider {
  constructor() {
    makeAutoObservable(this);
  }
}
