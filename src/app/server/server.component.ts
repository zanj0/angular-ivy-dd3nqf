import { Component } from '@angular/core';
@Component({
  // selector: 'app-server',
  // selector: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[`
    .online{
      color: white;
    }
  `]
  // template: '<h3> Hello World!</h3>'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus() {
    return this.serverStatus;
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus ='Server was created. Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
  getColor() {
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
}
