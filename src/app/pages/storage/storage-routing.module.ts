import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {StorageComponent} from "./storage.component";

const routes: Routes = [
  {
    path: '',
    data: { title: 'Storage list' },
    component: StorageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule {}
