import { Component, OnInit } from '@angular/core';
import { MyFirstServiceService } from './../my-first-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customerList = [];
  constructor(private service: MyFirstServiceService) { }

  ngOnInit() {
    this.service.getCustomers().subscribe(
      response => {
        console.log(response.records);
        this.customerList = response.records;
      }
    );
  }

}
