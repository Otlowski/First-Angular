import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Welcome to Indoornavi !</h1>
  <h3>Logged by : {{name}} {{surname}} - {{loginDate | date:'yyyy-MM-dd HH:mm:ss'}}</h3>
  <p><strong>User ID:</strong>{{id}}</p>
  <p><strong>Adress: </strong>{{adress.street}}, {{adress.city}} - {{adress.postcode}} </p>
  <div>
  
  </div>
  
  `,
})
export class UserComponent {
  name    : string;
  surname : string;
  id      : number;
  adress  : adress;
  loginDate : Date;
  projects : string[];

  constructor(){
    this.loginDate  = new Date();
    this.id = 1;
    this.surname = 'Otlowski';
    this.name = 'Maciej';
    this.adress = {
        street : 'Reja',
        city   : 'Gdansk',
        postcode  : 82300,
    }
    this.projects = ['ERPOT','Zlomek.pl', 'Olidar'];
    
  }
}

interface adress{
    street   : string;
    city     : string;
    postcode : number;
}