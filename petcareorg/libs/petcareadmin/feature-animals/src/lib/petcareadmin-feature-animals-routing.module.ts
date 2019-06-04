import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsOverviewComponent } from './animals-overview/animals-overview.component';
import { AnimalsComponent } from './animals/animals.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'animals' },
  { path: 'animals', component: AnimalsOverviewComponent },
  { path: 'animals/:animalTypeId', component: AnimalsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class PetcareAdminFeatureAnimalsRoutingModule { }
