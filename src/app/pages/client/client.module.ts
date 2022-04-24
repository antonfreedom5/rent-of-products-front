import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

import {ClientComponent} from "./client.component";
import {ClientRoutingModule} from "./client-routing.module";
import {SharedModule} from "../../shared.module";
import {ClientEditComponent} from "./components/client-edit/client-edit.component";


@NgModule({
  declarations: [ClientComponent, ClientEditComponent],
  imports: [ClientRoutingModule, CommonModule, SharedModule, FormsModule, MatSelectModule, ReactiveFormsModule, MatButtonModule],
})
export class ClientModule {}
