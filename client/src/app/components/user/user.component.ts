import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../models/user.model';
import { ShowUser } from './show-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: ShowUser[];
  editUser: ShowUser;
  user: User;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.showUsers().subscribe((data: ShowUser[]) => {
      this.users = data;
    });
  }

  userModel = new User('', '', '', '', '');

  onSubmit() {
    this.userService.addUser(this.userModel).subscribe(data => {
      console.log('Success!', data);
      this.ngOnInit();
    });
  }

  onEdit(id: String) {
    this.userService.editUser(id).subscribe(res => {
      this.editUser = res;
      console.log(res);
      this.router.navigate(['edit', id]);
    });
  }

  onDelete(id: String) {
    this.userService.deleteUser(id).subscribe(res => {
      this.user = res;
      this.ngOnInit();
      console.log(res);
    });
  }
}
