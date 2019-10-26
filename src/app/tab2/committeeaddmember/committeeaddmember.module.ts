import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommitteeaddmemberPage } from './committeeaddmember.page';

const routes: Routes = [
  {
    path: '',
    component: CommitteeaddmemberPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CommitteeaddmemberPage]
})
export class CommitteeaddmemberPageModule {}
