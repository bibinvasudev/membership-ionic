import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Tab4Page } from './tab4.page';
import { MatIconModule, MatInputModule, MatButtonModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatIconModule, MatInputModule, MatButtonModule
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
