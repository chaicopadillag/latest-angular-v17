import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-defer-wiews',
  standalone: true,
  imports: [HeavyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-wiews.component.html',
})
export default class DeferWiewsComponent {}
