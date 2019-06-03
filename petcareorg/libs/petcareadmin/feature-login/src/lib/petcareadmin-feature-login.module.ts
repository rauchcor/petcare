import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PetcareAdminLoginRoutingModule } from './petcareadmin-feature-login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, PetcareAdminLoginRoutingModule, FormsModule, HttpClientModule],
  declarations: [LoginComponent]
})
export class PetcareadminFeatureLoginModule {}
