import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsOverviewComponent } from './animals-overview/animals-overview.component';
import { PetcareAdminFeatureAnimalsRoutingModule } from './petcareadmin-feature-animals-routing.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [CommonModule, PetcareAdminFeatureAnimalsRoutingModule, HttpClientModule],
  declarations: [AnimalsOverviewComponent]
})
export class PetcareadminFeatureAnimalsModule {}
