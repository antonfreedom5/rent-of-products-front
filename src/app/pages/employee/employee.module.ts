import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

import {EmployeeComponent} from "./employee.component";
import {EmployeeRoutingModule} from "./employee-routing.module";
import {SharedModule} from "../../shared.module";
import {EmployeeEditComponent} from "./components/employee-edit/employee-edit.component";

@NgModule({
  declarations: [EmployeeComponent, EmployeeEditComponent],
    imports: [EmployeeRoutingModule, CommonModule, SharedModule, FormsModule, MatSelectModule, ReactiveFormsModule, MatButtonModule]
})
export class EmployeeModule {}
