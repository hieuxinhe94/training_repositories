import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'white';
  }

  @HostListener('mouseenter') onMouseEnter() {
    debugger;
    this.el.nativeElement.style.backgroundColor = 'gold';
    let currentHeight = this.el.nativeElement.style.height.replace('px', '');
    this.el.nativeElement.style.height = (+currentHeight + 50) + 'px';
  }

  @HostListener('mouseout') onClick() {
    this.el.nativeElement.style.backgroundColor = 'white';
  }

}
