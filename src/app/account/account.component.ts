import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountsService: AccountsService) { 
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('new Status: ' + status));
  }
  
  ngOnInit() { }

  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    this.accountsService.statusUpdated.emit(status);
  }

}
