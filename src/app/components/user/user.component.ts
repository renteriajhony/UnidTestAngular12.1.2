import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<User>;

  constructor(public userService: UserService) {
    this.users = new Array<User>();
  }

  ngOnInit() {
    this.getUsersData();
  }

  getUsersData(): void{
    this.userService.getUsers().subscribe(
      resp => {
        this.users = resp;
      }
    )
  }

}
