import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowregisterPageRoutingModule } from './showregister-routing.module';

import { ShowregisterPage } from './showregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowregisterPageRoutingModule
  ],
  declarations: [ShowregisterPage]
})
export class ShowregisterPageModule {}
