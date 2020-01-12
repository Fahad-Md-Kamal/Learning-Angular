import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  private firstObsSubscrtiption: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSubscrtiption = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create(observer => {
     let count = 0;
      setInterval( () => {
        observer.next(count);
        if (count == 2) {
          observer.complete(); // Complete
        }
        if (count > 3) {
          observer.error(new Error('Count is Greater than 3!')); // Error
        }
        count++;
      },1000);
    });

    // customIntervalObservable.pipe(map((data:number) => {
    //   return 'Round:' + (data + 1);
    // }));

    this.firstObsSubscrtiption = customIntervalObservable.pipe(filter(data => {
      return data > 0;
    }),map((data:number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed');
    });

  }

  ngOnDestroy() {
    this.firstObsSubscrtiption.unsubscribe();
  }

}
