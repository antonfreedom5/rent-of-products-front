import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {ClientComponent} from "./client.component";

const routes: Routes = [
  {
    path: '',
    data: { title: 'Client list' },
    component: ClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
