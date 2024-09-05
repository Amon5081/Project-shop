import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCardComponent } from '../../pages/shopping-card/shopping-card.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCardComponent,
    loadChildren: () => {
      return import('../navbard/navbard.module').then((m) => m.NavbardModule);
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavbardRoutingModule {}
