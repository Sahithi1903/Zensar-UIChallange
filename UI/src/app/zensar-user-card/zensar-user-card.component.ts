import { Component, Input, OnInit } from '@angular/core';
import { User } from '../zensar-user.model';
import { ZensarUserService } from '../zensar-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zensar-user-card',
  templateUrl: './zensar-user-card.component.html',
  styleUrls: ['./zensar-user-card.component.css'],
})
export class ZensarUserCardComponent implements OnInit {
  @Input() image = '';
  @Input() name = '';
  @Input() id = '';
  updateModal = false;
  deleteModal = false;
  user: User;
  delUser: User;
  showDialog = true;
  constructor(private userService: ZensarUserService, private router: Router) {}

  ngOnInit(): void {
    this.user = {
      Image: this.image,
      name: this.name,
      id: this.id,
    };
  }

  showEditPopup() {
    this.updateModal = true;
  }

  editUser() {
    let user = {
      Image: this.image,
      name: this.name,
      id: this.id,
    };
    this.userService.editUser(user);
  }

  deleteUser() {
    //this.userService.deleteUser(this.id);
    this.deleteModal = true;
  }

  openUser() {
    this.router.navigate(['/', this.id]);
  }
}
