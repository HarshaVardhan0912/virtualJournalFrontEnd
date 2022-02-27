import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserHomeComponent } from './user-home.component';

const routes: Routes = [{ path: 'homepage', component: HomePageComponent },
{ path: 'userpage', component: UserHomeComponent}
// { path: 'Register', component: RegistrationComponent},
// { path: 'Signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserhomeRoutingModule { }
