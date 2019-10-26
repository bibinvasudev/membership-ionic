import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage } from './tabs.page';

import { MatIconModule, MatButtonModule, MatInputModule, MatRadioModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    MatIconModule, MatButtonModule, MatInputModule, MatRadioModule,
    MatNativeDateModule, MatDatepickerModule, MatSelectModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
