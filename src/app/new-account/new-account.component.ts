import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // constructor(private loggingService: LoggingService) { }
  constructor(private loggingService: LoggingService, 
              private accountService: AccountsService) { }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string){
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }


}
