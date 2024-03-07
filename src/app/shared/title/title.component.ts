import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `<h2 class="text-3xl mt-4 ml-4 text-gray-700">{{ title }}</h2>`,
})
export class TitleComponent {
  @Input({ required: true }) title: string = 'Title';
  @Input({ transform: booleanAttribute }) isCase: boolean = false;
}
