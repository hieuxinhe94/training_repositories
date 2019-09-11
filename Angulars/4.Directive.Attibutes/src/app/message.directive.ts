import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appMessage]'
})
export class MessageDirective implements OnInit {

  @Input('type') messageType: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.getBackground;
  }

  // Parse color name by message type
  get getBackground() {
    let color = '';

    switch (this.messageType) {
      case 'success': { color = 'blue'; break; }
      case 'warning': { color = 'gold'; break; }
      case 'error': { color = 'red'; break; }
      default: color = 'white';
    }

    return color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter event for ' + this.messageType);
  }

  @HostListener('click') onClick() {
    console.log('click event for ' + this.messageType);
    this.el.nativeElement.style.backgroundColor = 'white';
  }

}
