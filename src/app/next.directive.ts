import { hostViewClassName } from '@angular/compiler';
import { Directive , ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) { }
  @HostListener('click')
  nextFunc(){
    var elm = this.el.nativeElement.parentElement.parentElement.children[1];
    var item = elm.getElementsByClassName("product-card")
    elm.append(item[0]);
  }



}
