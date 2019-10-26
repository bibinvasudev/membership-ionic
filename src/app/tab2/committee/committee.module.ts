import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CommitteePage } from './committee.page';
import { MatIconModule, MatButtonModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: CommitteePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

    MatIconModule, MatButtonModule
  ],
  declarations: [CommitteePage]
})
export class CommitteePageModule {}
