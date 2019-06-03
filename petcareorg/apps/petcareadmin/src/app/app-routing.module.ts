import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: 'login', loadChildren : () => import('@petcareorg/petcareadmin/feature-login').then(m => m.PetcareadminFeatureLoginModule) },
//{ path: 'shallnotpass', component: ShallnotpassComponent},
{ path: 'main', loadChildren : () => import('@petcareorg/petcareadmin/feature-main').then(m => m.PetcareadminFeatureMainModule) },
{ path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
