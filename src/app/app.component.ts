import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private accountService: AccountService) {

  }
  ngOnInit(): void {
    // this.loginUser();
    this.setCurrentUser();
  }
  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem("user"));
    this.accountService.setCurretUser(user);
  }

  // loginUser() {
  //   this.http.post('https://localhost:44366/api/User/login', { userName: 'bob', password: 'pass' }).subscribe(response => {
  //     console.log(response);
  //   }
  //     , error => {
  //       console.log(error);
  //     })
  // }
}
