import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddcommitteePage } from './addcommittee.page';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatButtonModule, MatSelectModule, MatIconModule, MatAutocompleteModule, MatChipsModule, MatSnackBarModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: AddcommitteePage
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
  declarations: [AddcommitteePage]
})
export class AddcommitteePageModule {}
