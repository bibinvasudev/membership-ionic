import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MatInputModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule } from '@angular/material';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatInputModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
