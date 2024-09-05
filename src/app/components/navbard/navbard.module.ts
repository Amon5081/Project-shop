import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbardRoutingModule } from './navbard-routing.module';
import { NavbardComponent } from './navbard.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [NavbardComponent],
  imports: [
    CommonModule,
    NavbardRoutingModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  exports: [NavbardComponent],
})
export class NavbardModule {}
