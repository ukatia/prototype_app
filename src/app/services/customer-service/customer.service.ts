import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  addCustomer(firstName, lastName, email, telephone): Observable<any> {
    const uri = 'http://localhost:4000/customers/add';
    const obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      telephone: telephone
    };
    return this.http.post(uri, obj);
  }


  getCustomers() {
    const uri = 'http://localhost:4000/customers';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editCustomer(id) {
    const uri = 'http://localhost:4000/customers/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateCustomer(firstName, lastName, email, telephone, id) {
    const uri = 'http://localhost:4000/customers/update/' + id;

    const obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      telephone: telephone
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteCustomer(id) {
    const uri = 'http://localhost:4000/customers/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}