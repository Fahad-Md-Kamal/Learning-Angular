import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // method name and Selector name must be Identical, 
  // Otherwise ng won't be able to recognize
  @Input() set appUnless (condition: boolean) {
    if (!condition){
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewRef.clear();
    }
  }

  constructor( private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef ) { }

}
