import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter<void>()
  isAuth = false;
  authSubscription: Subscription;

  constructor(private auhtService: AuthService ) { }

  ngOnInit(): void {
    this.authSubscription = this.auhtService.authChange.subscribe( authStatus =>  {
      this.isAuth  = authStatus;
    });
  }

  onClose() {
    this.sidenavClose.emit();

  }

  onLogout() {
    this.onClose();
    this.auhtService.logout();
  }

}
