import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/service/shared.service';
import {LOGINComponent} from '../login.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  ValidateUser = new FormGroup({
    userName: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  constructor(private loginComp : LOGINComponent,  private service : SharedService, private route:Router) { }
  events : any = [];
  validateStatus : boolean = false ;

  ngOnInit(): void {
    //This method is used to load the content whenever any event is taking place.
    this.loadEvents();
  }

  keyChange(key : number)
  {
    this.loginComp.openKey = key;
  }
  validateUserDetails(formValues : any){
    this.events.forEach( (value : any) => {
      if(formValues.userName == value.userName && formValues.password == value.password)
      {
        this.validateStatus = true;
      }
    });
    if(this.validateStatus)
    {
      alert("Successful login");
      this.validateStatus = false;
      this.route.navigate(['userpage']);
    }else{
      alert("Check your Credentials");
      this.route.navigate(['userpage']);
    }
  }

  loadEvents()
  {
    this.service.get('Registration').subscribe((result)=>{
      this.events=result;
    })
  }
}
