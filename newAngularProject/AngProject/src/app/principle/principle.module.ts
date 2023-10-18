import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipleRoutingModule } from './principle-routing.module';
import { PrincipleHomeComponent } from './principle-home/principle-home.component';


@NgModule({
  declarations: [
    PrincipleHomeComponent
  ],
  imports: [
    CommonModule,
    PrincipleRoutingModule
  ]
})
export class PrincipleModule { }
