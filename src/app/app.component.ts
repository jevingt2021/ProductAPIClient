import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.post('https://localhost:44366/api/User/login', { userName: 'bob', password: 'pass' }).subscribe(response => {       console.log(response);
  }
    , error => {
        console.log(error);
      })
  }
}
