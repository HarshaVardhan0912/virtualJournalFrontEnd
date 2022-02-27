import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import { LOGINComponent } from './login.component';
import { UserHomeComponent } from 'src/app/user-home/user-home.component';

const routes: Routes = [{ path: '', component: LOGINComponent },
{ path: 'Register', component: RegistrationComponent},
{ path: 'Signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
