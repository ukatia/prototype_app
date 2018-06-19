import { CustomerService } from './../../services/customer-service/customer.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  customers: any;

  constructor(private http: HttpClient, private customerService: CustomerService) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(res => {
      this.customers = res;
    });
  }

  deleteCustomer(id) {
    this.customerService.deleteCustomer(id).subscribe(res => {
      this.getCustomers();
    });
  }
}