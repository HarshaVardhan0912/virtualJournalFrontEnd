import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOGINComponent } from './login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { SigninComponent } from './login/signin/signin.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from 'src/service/shared.service';
import { UserHomeComponent } from './user-home/user-home.component';
import {UserHomeModule} from './user-home/user-home.module';
import { AllEntriesComponent } from './all-entries/all-entries.component';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    LOGINComponent,
    RegistrationComponent,
    SigninComponent,
    UserHomeComponent,
    AllEntriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
