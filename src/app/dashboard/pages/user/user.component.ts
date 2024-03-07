import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { UserService } from '@services/user.service';
import { filter, map, switchMap } from 'rxjs';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule, TitleComponent],
  templateUrl: './user.component.html',
  styles: ``,
})
export default class UserComponent {
  private router = inject(ActivatedRoute);
  private userService = inject(UserService);

  user = toSignal(
    this.router.params.pipe(
      filter(({ id }) => id),
      map<Params, string>(({ id }) => id),
      switchMap((id) => this.userService.getUserById(id))
    )
  );

  fullName = computed(() =>
    this.user() ? `${this.user()?.first_name} ${this.user()?.last_name}` : '...'
  );
}
