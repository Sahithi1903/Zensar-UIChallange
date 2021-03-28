import { Component, Input, OnInit } from '@angular/core';
import { ZensarUserService } from '../zensar-user.service';
import { User } from '../zensar-user.model';

@Component({
  selector: 'app-zensar-modal-popup',
  templateUrl: './zensar-modal-popup.component.html',
  styleUrls: ['./zensar-modal-popup.component.css'],
})
export class ZensarModalPopupComponent implements OnInit {
  @Input() user: User;
  @Input() type: string;
  @Input() show: boolean;
  image: string;
  name: string;
  //show = true;
  finalUser: User;
  constructor(private userService: ZensarUserService) {}

  ngOnInit(): void {
    if (this.type === 'edit' || this.type === 'delete') {
      this.finalUser = this.user;
    } else if (this.type === 'add') {
      this.finalUser = {
        Image: '',
        name: '',
        id: '',
      };
    }

    this.show = true;
  }

  addUser() {
    this.show = false;
    this.userService.addUser(this.finalUser);
  }

  onChange(key, value) {
    this.finalUser[key] = value;
  }

  onCancel() {
    this.show = false;
  }

  editUser() {
    this.show = false;
    this.userService.editUser(this.finalUser);
  }

  deleteUser() {
    this.show = false;
    this.userService.deleteUser(this.finalUser.id);
  }
}
