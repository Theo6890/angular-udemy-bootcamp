import {Directive, ElementRef, Input} from '@angular/core';

// This is a test to see a test file to see how to create directives. This one just handle className such as the default
// direct [className].

@Directive({
  selector: '[appCarousel]'
})
export class ClassDirective {
  constructor(private element: ElementRef) {
  }

  @Input('appCarousel') set classNames(classObj: any) {
    for (const key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
