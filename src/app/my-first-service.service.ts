import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyFirstServiceService {

  constructor(private http: Http) {  }

  add(a, b) {
    return a + b;
  }

  getCustomers() {
    return this.http.get('https://www.w3schools.com/angular/customers.php').map(response => response.json());
  }

}
