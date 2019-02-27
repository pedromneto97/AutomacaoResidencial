import {Injectable} from '@angular/core';
import {Connection, Session} from 'autobahn';

@Injectable({
  providedIn: 'root'
})
export class CrossbarService {
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

  public temperatura(x) {
    console.log(x);
    this.connection.onopen = function (session: Session) {
      console.log(x);
      session.call('com.example.teste', [x]).then(
        function (res) {
          console.log('Result:', res);
        }
      );
    };
    this.connection.open();
  }
}
