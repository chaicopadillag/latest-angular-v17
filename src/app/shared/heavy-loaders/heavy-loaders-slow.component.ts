import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'heavy-loaders-slow',
  standalone: true,
  imports: [TitleComponent, CommonModule],
  template: ` <div [ngClass]="['h-[700px]', cssClass]"></div> `,
})
export class HeavyLoadersSlowComponent {
  @Input() cssClass: string = 'bg-green-600';

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
    console.log('Cargado');
  }
}
