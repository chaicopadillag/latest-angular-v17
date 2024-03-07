import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="Change Detection" />
    <div class="flex flex-row text-gray-600">
      <div
        class="m-4 p-4 drop-shadow-m rounded-lg bg-white transition-colors basis-1/3 space-x-1"
      >
        <pre>{{ framework() | json }}</pre>
      </div>
      <div
        class="m-4 p-4 drop-shadow-m rounded-lg bg-white transition-colors basis-1/3 space-x-1"
      >
        <pre>{{ frameworkReact | json }}</pre>
      </div>
    </div>
  `,
})
export default class ChangeDetectionComponent implements OnDestroy {
  private interval;

  framework = signal({
    name: 'Angular',
    description: 'Voluptas voluptas quam dignissimos ad.',
  });

  frameworkReact = {
    name: 'React',
    description: 'Voluptas voluptas quam dignissimos ad.',
  };

  constructor() {
    this.interval = setInterval(() => {
      //       this.frameworkReact.name = 'Vue';
      // console.log('change frameworkReact to vue');

      this.framework.update((value) => ({ ...value, name: 'React' }));
      console.log('change frameworkAngular to React');
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
