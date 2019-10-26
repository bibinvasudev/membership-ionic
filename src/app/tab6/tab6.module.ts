import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Tab6Page } from './tab6.page';
import { MatIconModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { ProfileDetailModule } from '../common/profiledetail/profiledetail.module';

const routes: Routes = [
  {
    path: '',
    component: Tab6Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ProfileDetailModule,
    MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatButtonModule, MatIconModule, MatSelectModule, MatChipsModule, MatSnackBarModule
  ],
  declarations: [Tab6Page]
})
export class Tab6PageModule {}