import { Component, OnInit } from '@angular/core';
import { DyfiauthService } from './dyfiauth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import appconfig from '../app.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User;

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackbar: MatSnackBar,
    private authService: DyfiauthService) { }

  ngOnInit() { }

  loginUser(): void {
    let user = new User
    user.mobile_no = this.user.mobile_no
    user.dob = this.user.dob ? formatDate(this.user.dob, 'dd/MM/yyyy', 'en-IN') : ''
    let payload = user
    payload = { mobile_no: "9090123456", dob: "01/01/2019" }
    payload = { mobile_no: "00", dob: "01/01/1990" }
    
    this.http.post(`${appconfig.apidomain}/login`, payload).subscribe(
      ($loginResponse: any) => {
        this.authService.token = $loginResponse.token
        this.router.navigate(['tabs'])
        this.debugvar = $loginResponse
      }
      ,
      ($loginError: any) => {
        let errorMessage: string;
        if (401 === $loginError.status)
          errorMessage = 'Please enter correct number and date.'
        else
          errorMessage = 'Something went wrong, Please try again.'
        let snackBarConfig: MatSnackBarConfig = new MatSnackBarConfig();
        snackBarConfig.duration = 3000
        this.snackbar.open(errorMessage, null, snackBarConfig)
        this.debugvar = $loginError
      }
    );

  }
  debugvar: any;
}

class User {
  mobile_no: string
  dob: string
}