import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { ShowUser } from '../components/user/show-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  showUser: ShowUser;
  url = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {}

  addUser(user: User) {
    return this.http.post<any>(`${this.url}`, user);
  }

  showUsers() {
    return this.http.get(this.url);
  }

  editUser(id: String) {
    return this.http.get<ShowUser>(`${this.url}/edit/${id}`);
  }

  updateUser(user: User, id) {
    return this.http.post(`${this.url}/update/${id}`, user);
  }

  deleteUser(id: String) {
    return this.http.delete<User>(`${this.url}/delete/${id}`);
  }
}
