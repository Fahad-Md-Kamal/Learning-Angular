import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      instanceType: 'medium', 
      name: 'Production server',
      status: 'stable',
      started: new Date(2017, 1, 15)
    },
    {
      instanceType: 'large', 
      name: 'User Data',
      status: 'stable',
      started: new Date(2017, 1, 15)
    },
    {
      instanceType: 'small', 
      name: 'Developement Server',
      status: 'offline',
      started: new Date(2017, 1, 15)
    },
    {
      instanceType: 'small', 
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(2017, 1, 15)
    },
  ];

  filteredStatus = '';

  getStautusClassess(server: {instanceType: string, 
                              name: string, 
                              status: string, 
                              started: Date}) 
  {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    }
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small', 
      name: 'New Server',
      status: 'critical',
      started: new Date(2017, 1, 15)
    });
  }


}
