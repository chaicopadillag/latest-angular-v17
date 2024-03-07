import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

type Nota = 'A' | 'B' | 'C';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  isTrue = signal(false);

  nota = signal<Nota>('B');

  textShow = computed(() => (this.isTrue() ? 'number' : 'text'));

  frameworks = signal(['React', 'Angular', 'Vue', 'Svelt', 'Quik']);

  toggle() {
    this.isTrue.update((val) => !val);
  }

  randomNota() {
    const notas: Nota[] = ['A', 'B', 'C'];

    const index = Math.floor(Math.random() * 3);

    this.nota.set(notas[index]);
  }

  removeAllFrameworks() {
    this.frameworks.set([]);
  }
}
