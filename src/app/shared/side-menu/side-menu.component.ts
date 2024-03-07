import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styles: '',
})
export class SideMenuComponent {
  menuItems = routes
    .flatMap((r) => r.children ?? [])
    .filter((r) => r && r.path && !r.path.includes(':'));

  constructor() {}
}
