import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor() { }
  openKey : number = 0;
  ngOnInit(): void {
  }
  
  keyChange(key : number)
  {
    this.openKey = key;
  }
  
}
