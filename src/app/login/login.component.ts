import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LOGINComponent implements OnInit {

  constructor() { }
  openKey : number = 0;
  ngOnInit(): void {
  }
  
  keyChange(key : number)
  {
    this.openKey = key;
  }
}
