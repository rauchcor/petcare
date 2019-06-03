import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { PetcareadminFeatureRoutingMainModule } from './petcareadmin-feature-main-routing.module';

@NgModule({
  imports: [CommonModule, PetcareadminFeatureRoutingMainModule],
  declarations: [NavComponent]
})
export class PetcareadminFeatureMainModule {}
