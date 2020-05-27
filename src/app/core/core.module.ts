import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent]
})
export class CoreModule { }
