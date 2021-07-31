import { Component } from '@angular/core';
@Component({
  // selector: 'app-server',
  // selector: '[app-server]',
  selector: '.app-server',
  templateUrl: './server.component.html'
  // template: '<h3> Hello World!</h3>'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus = 'offline';
  allowNewServer = false;
  serverCreationStatus = "No server was created.";
  serverName = 'Test Server';
  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }
  getServerStatus(){
    return this.serverStatus;
  }
  onCreateServer(){
    this.serverCreationStatus = "Server was created. Name is " + this.serverName;
  }
  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
