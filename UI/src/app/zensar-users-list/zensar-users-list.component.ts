import { Component, OnInit } from '@angular/core';
import { ZensarUserService } from '../zensar-user.service';
import { User } from '../zensar-user.model';

@Component({
  selector: 'app-zensar-users-list',
  templateUrl: './zensar-users-list.component.html',
  styleUrls: ['./zensar-users-list.component.css'],
})
export class ZensarUsersListComponent implements OnInit {
  users: User[];
  completeUsers: User[];
  addModal = false;
  user: User;
  showDialog = true;
  constructor(private userService: ZensarUserService) {}

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe((res) => {
      this.users = res;
    });
  }

  addUser() {
    this.addModal = true;
    //this.userService.addUser();
  }

  onInputChanged(value: string) {
    for (let i = 0; i < this.completeUsers.length; i++) {
      if (
        this.completeUsers[i].name.toLowerCase().indexOf(value.toLowerCase()) >=
        0
      ) {
        if (this.users.indexOf(this.completeUsers[i]) === -1) {
          this.users.push(this.completeUsers[i]);
        }
      } else {
        let index = this.users.indexOf(this.completeUsers[i]);
        this.users.splice(index, 1);
      }
    }
    console.log(this.completeUsers);
  }
}
