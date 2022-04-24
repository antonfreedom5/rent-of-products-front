import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientModule} from "./pages/client/client.module";
import {PositionModule} from "./pages/position/position.module";
import {EmployeeModule} from "./pages/employee/employee.module";
import {StorageModule} from "./pages/storage/storage.module";
import {ProductModule} from "./pages/product/product.module";

const routes: Routes = [
  {
    path: 'position',
    loadChildren: (): Promise<PositionModule> => import('./pages/position/position.module').then((m) => m.PositionModule)
  },
  {
    path: 'client',
    loadChildren: (): Promise<ClientModule> => import('./pages/client/client.module').then((m) => m.ClientModule)
  },
  {
    path: 'employee',
    loadChildren: (): Promise<EmployeeModule> => import('./pages/employee/employee.module').then((m) => m.EmployeeModule)
  },
  {
    path: 'storage',
    loadChildren: (): Promise<StorageModule> => import('./pages/storage/storage.module').then((m) => m.StorageModule)
  },
  {
    path: 'product',
    loadChildren: (): Promise<ProductModule> => import('./pages/product/product.module').then((m) => m.ProductModule)
  },
  {
    path: '**',
    redirectTo: '/client'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
