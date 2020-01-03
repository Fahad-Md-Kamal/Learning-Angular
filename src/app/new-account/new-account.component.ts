import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  constructor(private accountService: AccountsService) { }

  ngOnInit() {}

  onCreateAccount(accountName: string, accountStatus: string){
    this.accountService.addAccount(accountName, accountStatus);
  }


}
