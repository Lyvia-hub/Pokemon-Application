import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 230;
  private backgroundColor: string = 'black';
  private initialBackgroundColor: string = 'none';
  private initialTextColor: string = 'black';
  private textColor: string = 'white';

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
    this.setBackground(this.backgroundColor);
    this.settextColor(this.textColor);
  }

  @Input('appBorderCard') borderColor: string; // alias

  @HostListener('mouseenter') onMouseEnter() {
    // utilisation de l'alias borderColor
    this.setBorder(this.borderColor || this.defaultColor);
    this.setBackground(this.backgroundColor);
    this.settextColor(this.textColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
    this.setBackground(this.initialBackgroundColor);
    this.settextColor(this.initialTextColor);
  }

  private setBorder(color: string) {
    const border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }

  private setBackground(background: string) {
    this.el.nativeElement.style.background = background;
  }

  private settextColor(color: string) {
    this.el.nativeElement.style.color = color;
  }



}
