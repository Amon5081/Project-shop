import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { NavbardModule } from '../navbard/navbard.module';

@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, ShopRoutingModule, NavbardModule],
  exports: [ShopComponent],
})
export class ShopModule {}
