import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { HomeComponent } from './home/home.component';
import { ServersService } from './servers/servers.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }, //localhost:4200/
  { path: 'users', component: UsersComponent }, //localhost:4200/users
  { path: 'servers', component: ServersComponent }, //localhost:4200/users
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ServersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
