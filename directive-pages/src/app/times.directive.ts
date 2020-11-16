import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

// This one is a test to create my own structural directive. It basically replace a for directive. It will print an
// element as many times as the index size.

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  // ViewContainerRef: element from where the data is coming from (e.g. <ul>)
  // TemplateRef: child contained in ViewContainerRef (e.g. <li>)
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {
  }

  @Input('appTimes') set render(times: number) {
    // Clear every element inside of the container <ul>
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      // Create new HTML tag
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i
      });
    }
  }

}
