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
          OnDestroy,
          ViewChild,
          ElementRef,
          ContentChild} from '@angular/core';

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
  @ViewChild('heading', {static:true}) header: ElementRef;
  @ContentChild('contentParagraph', {static:true}) Paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log("Text Content: " + this.header.nativeElement.textContent);
    console.log("Paragraph: " + this.Paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck Called')
  } 
  ngAfterContentInit() {
    console.log('ngAfterContentInit Called')
    console.log("Paragraph: " + this.Paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Called')
    console.log("Text Content: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called')
  }
  ngOnDestroy() {
    console.log('ngOnDestroy Called')
  }

}
