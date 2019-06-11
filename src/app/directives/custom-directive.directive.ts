import { Directive } from '@angular/core';
// Apply the attribute directive
import { ElementRef } from '@angular/core';
// Respond to user-initiated events
import { HostListener } from '@angular/core';
// Pass values into the directive with an @Input data binding
import { Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class CustomDirectiveDirective {

  @Input('level') level: string;
  @Input('message') message: string;

  constructor(private el: ElementRef) { }

  // Event for mouse enter the element
  @HostListener('mouseenter') onmouseenter() {
    this.changeEleBackgroundColor('yellow');
  }

  // Event for mouse leave the element
  @HostListener('mouseleave') onmouseleave() {
    this.changeEleBackgroundColor('green');
  }

  changeEleBackgroundColor(color: string){
    debugger;
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.innerHTML  = this.message;
  }
}
