import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowregisterPage } from './showregister.page';

const routes: Routes = [
  {
    path: '',
    component: ShowregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowregisterPageRoutingModule {}
