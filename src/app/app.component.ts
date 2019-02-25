import { Component } from '@angular/core';

@Component({
  selector: 'My-App',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstAngularApp';
  contacts = [];
  constructor() {
    this.contacts = [
      {
        ID: 1,
        first_name: 'Jose',
        last_name: 'Rosales',
        email: 'joserosales@me.com'
      },
      {
        ID: 2,
        first_name: 'Oswi',
        last_name: 'Gonzales',
        email: 'joserosales@me.com'
      },
      {
        ID: 3,
        first_name: 'Leonel',
        last_name: 'Messi',
        email: 'joserosales@me.com'
      }
    ];
  }
  delete(e) {
    console.log('from delete: ', e);
    this.contacts.splice(e, 1);
  }
  addRow() {
    this.contacts.push({
      ID: 1,
      first_name: 'Jose',
      last_name: 'Rosales',
      email: 'joserosales@me.com'
    }
    )
  }
}