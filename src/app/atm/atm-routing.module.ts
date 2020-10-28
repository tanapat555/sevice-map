import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtmPage } from './atm.page';

const routes: Routes = [
  {
    path: '',
    component: AtmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtmPageRoutingModule {}
