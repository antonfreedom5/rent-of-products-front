import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {ProductComponent} from "./product.component";

const routes: Routes = [
  {
    path: '',
    data: { title: 'Product list' },
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
