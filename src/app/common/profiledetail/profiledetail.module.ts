import { ProfiledetailComponent } from './profiledetail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        IonicModule,
    ],
    exports: [
        ProfiledetailComponent
    ],
    declarations: [ProfiledetailComponent]
})
export class ProfileDetailModule { }
