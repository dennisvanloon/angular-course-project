import {Component, OnDestroy, OnInit} from '@angular/core';
import {filter, interval, map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSubscription: Subscription;
  private secondSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // })
    const customIntervalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete()
        }
        if (count > 3) {
          observer.error(new Error('Count is larger then 3!'))
        }
        count++;
      }, 1000)
    });

    this.secondSubscription = customIntervalObservable.pipe(
      filter((data: number) => {return data > 0;}),
      map((data: number) => {return 'Round: ' + (data + 1);})
    ).subscribe({
      next(data) {
        console.log(data);
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        console.log('Completed');
      }}
    );
  }

  ngOnDestroy(): void {
    // this.firstSubscription.unsubscribe();
    this.secondSubscription.unsubscribe();
  }

}
