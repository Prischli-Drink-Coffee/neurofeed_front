import { makeAutoObservable } from 'mobx';

class GlobalVarsStore {
  token = null;
  is_admin = false;
  username = null
  constructor() {
    makeAutoObservable(this);
  }
  updateToken = newValue => {
    this.token = newValue;
  };
  getToken = async values => {
    const response = await fetch('http://176.222.55.165:8000/login', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    this.token = result.access_token;
  };
  getMe = async values => {
    const response = await fetch('http://176.222.55.165:8000/user/me', {
      method: 'GET',
      body: JSON.stringify(values),
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    });
    const result = await response.json();
    this.is_admin = result.username == 'admin';
    this.username = result.username
  };
}

export default GlobalVarsStore;
