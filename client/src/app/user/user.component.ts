import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../models/user.model';
import { ShowUser } from './show-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: ShowUser[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.showUsers().subscribe((data: ShowUser[]) => {
      this.users = data;
    });
  }

  data: User[];
  userModel = new User('', '', '', '', '');

  onSubmit() {
    console.log(this.data);
    this.userService
      .addUser(this.userModel)
      .subscribe(data => console.log('Success!'));
  }
}
