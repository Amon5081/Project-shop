import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { NavbardComponent } from '../navbard/navbard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'shop',
        component: ShopComponent,
      },
      {
        path: '',
        component: NavbardComponent,
        loadChildren: () =>
          import('../navbard/navbard.module').then((m) => m.NavbardModule),
      },
      {
        path: '',
        component: ShopComponent,
        loadChildren: () =>
          import('../../pages/shopping-card/shopping-card.module').then(
            (m) => m.ShoppingCardModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
