import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { ShoppingCardComponent } from './pages/shopping-card/shopping-card.component';

const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: '', component: ShoppingCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
