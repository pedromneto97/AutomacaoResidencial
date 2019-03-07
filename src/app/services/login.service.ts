import {Injectable} from '@angular/core';
import {Connection, Session} from 'autobahn';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private connection: Connection;

  constructor() {
    let wsuri;
    if (document.location.origin === 'file://') {
      wsuri = 'ws://127.0.0.1:8080/ws';

    } else {
      wsuri = (document.location.protocol === 'http:' ? 'ws:' : 'wss:') + '//' +
        document.location.host + '/ws';
    }
    this.connection = new Connection({url: wsuri, realm: 'realm1'});
  }

  public login() {
    sessionStorage.setItem('0', 'a');
    sessionStorage.setItem('1', 'b');
    sessionStorage.setItem('2', 'c');
  }

  public isLogged() {
    if (sessionStorage.getItem('0') && sessionStorage.getItem('1') && sessionStorage.getItem('2')) {
      return true;
    }
  }

}
