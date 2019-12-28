import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];


  onIntervalFired(FiredNumber: number) {
    if (FiredNumber % 2 == 0){
      return this.evenNumbers.push(FiredNumber);
    }else {
      return this.oddNumbers.push(FiredNumber);
    }
  }
}
