import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './zensar-user.model';

@Injectable({
  providedIn: 'root',
})
export class ZensarUserService {
  users: User[];
  maxId: any;
  API_URL = `http://localhost:3000/posts`;
  constructor(private http: HttpClient) {
    this.fetchMaxId();
  }

  fetchUsers() {
    return this.http.get<User[]>(
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`
    );
  }

  fetchMaxId() {
    this.http
      .get<User[]>(
        `https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`
      )
      .subscribe((response) => {
        let len = response.length;
        let id = parseFloat(response[len - 1].id);
        this.maxId = id + 1;
      });
  }
  addUser(user) {
    user.id = this.maxId.toString();
    this.http.post(this.API_URL, user).subscribe((response) => {
      console.log(response);
    });
  }

  deleteUser(id) {
    this.http.delete(`${this.API_URL}/${id}`).subscribe((response) => {
      console.log(response);
    });
  }

  editUser(user) {
    this.http
      .patch(`${this.API_URL}/${user['id']}`, user)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
