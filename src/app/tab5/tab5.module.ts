import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Tab5Page } from './tab5.page';
import { MatIconModule, MatButtonModule, MatInputModule, MatRadioModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule } from '@angular/material';
import { ProfileDetailModule } from '../common/profiledetail/profiledetail.module';

const routes: Routes = [
  {
    path: '',
    component: Tab5Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

    ProfileDetailModule,
    MatIconModule, MatButtonModule, MatInputModule, MatRadioModule,
    MatNativeDateModule, MatDatepickerModule, MatSelectModule
  ],
  declarations: [Tab5Page]
})
export class Tab5PageModule { }
