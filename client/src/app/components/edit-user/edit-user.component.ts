import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserService]
})
export class EditUserComponent implements OnInit {
  user: any = {};

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userService.editUser(params['id']).subscribe(res => {
        this.user = res;
      });
    });
  }

  updateUser(updatedUser: User) {
    console.log('Updated', updatedUser);
    this.activatedRoute.params.subscribe(params => {
      this.userService.updateUser(params['id'], updatedUser);
    });
    this.ngOnInit();
    this.router.navigate(['']);
  }
}
