import { Component } from '@angular/core';


@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styles:[`
        .onLine {
            color : white;
        }

    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'Offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'onLine' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'onLine' ? '#586458': '#805480';
    }

}