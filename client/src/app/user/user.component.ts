import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}

  data: User[];
  userModel = new User('', '', '', '', '');

  onSubmit() {
    console.log(this.data);
    this.userService
      .addUser(this.userModel)
      .subscribe(data => console.log('Success!'));
  }
}
