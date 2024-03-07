import { Component } from '@angular/core';

@Component({
  selector: 'heavy-loaders-fast',
  standalone: true,
  imports: [],
  template: `<div class="text-gray-600"><ng-content /></div>`,
})
export class HeavyLoadersFastComponent {
  constructor() {
    console.log('Fast Loader');
  }
}
