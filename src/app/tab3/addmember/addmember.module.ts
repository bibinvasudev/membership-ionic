import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddmemberPage } from './addmember.page';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatButtonModule, MatSelectModule, MatIconModule, MatAutocompleteModule, MatChipsModule, MatSnackBarModule } from '@angular/material';
import { Camera } from '@ionic-native/camera/ngx';
import { InterceptorService } from 'src/app/login/interceptor.service';

const routes: Routes = [
  {
    path: '',
    component: AddmemberPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),

    MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatButtonModule, MatIconModule, MatSelectModule, MatAutocompleteModule, MatChipsModule, MatSnackBarModule
  ],
  declarations: [AddmemberPage],
  providers: [Camera]
})
export class AddmemberPageModule { }
