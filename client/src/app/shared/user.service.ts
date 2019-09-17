import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) { }

  addUser(user: User){
    return this.http.post(`${this.url}`, user);
  }
}
