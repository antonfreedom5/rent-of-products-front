import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {PositionComponent} from "./position.component";

const routes: Routes = [
  {
    path: '',
    data: { title: 'Position list' },
    component: PositionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionRoutingModule {}
