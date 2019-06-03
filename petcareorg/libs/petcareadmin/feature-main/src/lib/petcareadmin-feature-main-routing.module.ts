import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: "",
    component: NavComponent,
    children: [
      { path: '', loadChildren : () => import('@petcareorg/petcareadmin/feature-animals').then(m => m.PetcareadminFeatureAnimalsModule) },
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class PetcareadminFeatureRoutingMainModule { }
