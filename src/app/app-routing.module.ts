import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvsComponent } from './avs/avs.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'avs',
    component: AvsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
