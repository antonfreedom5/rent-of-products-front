import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

import {PositionRoutingModule} from "./position-routing.module";
import {PositionComponent} from "./position.component";
import {SharedModule} from "../../shared.module";
import {PositionEditComponent} from "./components/position-edit/position-edit.component";

@NgModule({
  declarations: [PositionComponent, PositionEditComponent],
    imports: [PositionRoutingModule, CommonModule, SharedModule, FormsModule, MatButtonModule]
})
export class PositionModule {}
