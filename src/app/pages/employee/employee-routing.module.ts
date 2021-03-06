import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {EmployeeComponent} from "./employee.component";

const routes: Routes = [
  {
    path: '',
    data: { title: 'Employee list' },
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
