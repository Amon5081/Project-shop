import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbardModule } from './components/navbard/navbard.module';
import { ShopModule } from './components/shop/shop.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavbardModule, ShopModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
