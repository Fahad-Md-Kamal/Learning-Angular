import {  Component, 
          OnInit, 
          Input, 
          ViewEncapsulation, 
          OnChanges, 
          SimpleChanges,
          DoCheck,
          AfterContentInit,
          AfterContentChecked,
          AfterViewInit,
          AfterViewChecked,
          OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // ########## This is used to apply the styles of this component globally
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck Called')
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit Called')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Called')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called')
  }
  ngOnDestroy() {
    console.log('ngOnDestroy Called')
  }

}
