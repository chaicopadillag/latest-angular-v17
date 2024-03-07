import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '@services/user.service';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterModule, CommonModule, TitleComponent],
  templateUrl: './users.component.html',
  styles: ``,
})
export default class UsersComponent {
  private userService = inject(UserService);

  get users() {
    return this.userService.users();
  }

  get isLoading() {
    return this.userService.isLoading();
  }
}
