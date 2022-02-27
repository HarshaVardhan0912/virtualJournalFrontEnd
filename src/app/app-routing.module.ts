import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEntriesComponent } from './all-entries/all-entries.component';
import { LOGINComponent } from './login/login.component';
import { UserHomeComponent} from './user-home/user-home.component';

const routes: Routes = [
  {path:'Login',component:LOGINComponent},
  { path: 'userpage', component: UserHomeComponent },
  {path : 'Entries', component: AllEntriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
