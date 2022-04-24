import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

import {SharedModule} from "../../shared.module";
import {ProductComponent} from "./product.component";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";
import {ProductRoutingModule} from "./product-routing.module";

@NgModule({
  declarations: [ProductComponent, ProductEditComponent],
  imports: [ProductRoutingModule, CommonModule, SharedModule, FormsModule, MatSelectModule, ReactiveFormsModule, MatButtonModule]
})
export class ProductModule {}
