import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientModule} from "./pages/client/client.module";
import {HomeModule} from "./pages/home/home.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<HomeModule> => import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'client',
    loadChildren: (): Promise<ClientModule> => import('./pages/client/client.module').then((m) => m.ClientModule)
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
