import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LOGINComponent } from '../login.component';
import {SharedService} from 'src/service/shared.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private loginComp : LOGINComponent, private service : SharedService) { }
  addUser = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    userName: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    phoneNumber: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
  });
  
  resultStatus : boolean = false;

  ngOnInit(): void {
  }
  
  addUserDetails(formValues: any)
  {
    this.validateUserDetails(formValues)
    if(this.resultStatus == true)
    {
    this.service.post('Registration',formValues).subscribe((result)=>{
      console.warn(result);
      
    })
      alert("Registration Successful");
      this.loginComp.openKey = 0;
    }
    else{
      alert("Registration Unsuccessful")
    }
  }

  validateUserDetails(formValues: any) {
    if(formValues.firstName == '' || formValues.lastName == '' || formValues.userName == '' || formValues.phoneNumber == '' || formValues.email == '' || formValues.password == '')
    {
      this.resultStatus = false;
    }
    else
    {
      this.resultStatus = true;
    }
  }

  keyChange(key : number)
  {
    this.loginComp.openKey = key;
  }
}
