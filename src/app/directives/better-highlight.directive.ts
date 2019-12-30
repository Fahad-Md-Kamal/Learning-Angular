import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string;
  // @Input() highlightColor: string;
  @Input('appBetterHighlight') highlightColor: string;
  
  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private elRef:ElementRef, private renderer: Renderer2 ) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    // this.backgroundColor = '#808'; 
    this.backgroundColor = this.highlightColor; 
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.backgroundColor = 'yellow';
    this.backgroundColor = this.defaultColor
  }

}
