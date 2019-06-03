import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsOverviewComponent } from './animals-overview/animals-overview.component';
import { PetcareAdminFeatureAnimalsRoutingModule } from './petcareadmin-feature-animals-routing.module';

@NgModule({
  imports: [CommonModule, PetcareAdminFeatureAnimalsRoutingModule],
  declarations: [AnimalsOverviewComponent]
})
export class PetcareadminFeatureAnimalsModule {}
