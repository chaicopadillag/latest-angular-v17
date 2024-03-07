import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, delay, map, of } from 'rxjs';
import {
  User,
  UserResponse,
  UsersResponse,
} from '../../interfaces/user.interface';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  #state = signal<State>({
    loading: true,
    users: [],
  });

  private http = inject(HttpClient);

  public users = computed(() => this.#state().users);
  public isLoading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get<UsersResponse>('https://reqres.in/api/users')
      .pipe(
        delay(1500),
        map((resp) => resp.data),
        catchError(() => of([]))
      )
      .subscribe({
        next: (data) => this.#state.set({ users: data, loading: false }),
      });
  }

  getUserById(id: string) {
    return this.http
      .get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500),
        map((resp) => resp.data),
        catchError(() => of(null))
      );
  }
}
