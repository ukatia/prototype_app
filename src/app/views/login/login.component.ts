import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  password: string;

  bLogin: boolean;

  constructor(private router: Router) {
    this.bLogin = false;
  }

  ngOnInit() {
  }

  login() {
    if (this.user == 'admin' && this.password=='admin') {
      // save login item to local storage
      window.localStorage.setItem("login", "true");
      this.router.navigate(['/index']);
    }
    else {
      this.bLogin = true;
    }

  }

}
