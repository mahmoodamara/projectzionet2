import { Directive , ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  prevFunc(){
    var elm = this.el.nativeElement.parentElement.parentElement.children[1];
    var item = elm.getElementsByClassName("product-card");
    elm.prepend(item[item.length -1]);
  }

}
