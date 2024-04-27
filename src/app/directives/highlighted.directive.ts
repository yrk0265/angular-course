import { Directive, EventEmitter, HostBinding ,HostListener,Input, Output} from '@angular/core';


@Directive({
  selector: '[highlighted]',
  exportAs:'hl'
})
export class HighlightedDirective {
  @Input('highlighted')
  isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() { 
    console.log(' Test Black ');
  }
  // @HostBinding('className')
  // get cssClassess(){
  //     return "highlighted";
  // }
  @HostBinding('class.highlighted')
  get cssClassess() {
      return this.isHighlighted;
  }
  // @HostBinding('style.border')
  // get cssClassess() {
  //     return '1px solid red';
  // }
  // @HostBinding('attr.disabled')
  // get disabled() {
  //     return "true";
  // } 
  // @HostListener('mouseover',['$event'])
  // mouseOver($event){
  //   console.log($event);
  //   this.isHighlighted = true;
  //   this.toggleHighlight.emit(this.isHighlighted);
  // }
  // @HostListener('mouseleave')
  // mouseLeave(){
  //   this.isHighlighted = false;
  //   this.toggleHighlight.emit(this.isHighlighted);
  // }
  toggle(){
    this.isHighlighted=!this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }
}
