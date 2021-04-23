import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode=false;
  uaers: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  getUsers(){
    this.http.post('https://localhost:44366/api/User/login', { userName: 'bob', password: 'pass' }).subscribe(response => {
      console.log(response);
    }
      , error => {
        console.log(error);
      })
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }

}
