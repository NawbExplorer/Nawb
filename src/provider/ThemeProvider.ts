import { makeAutoObservable } from 'mobx';

export default class ThemeProvider {
  constructor() {
    makeAutoObservable(this);
  }

  bodyBgColor = 'red';

  setTheme(theme: 'dark' | 'light') {
    console.log(this);
    if (theme === 'dark') {
      this.bodyBgColor = 'green';
    } else {
      this.bodyBgColor = 'red';
    }
    console.log(this);
  }
}
