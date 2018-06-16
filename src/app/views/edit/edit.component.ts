// edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './../../services/customer-service/customer.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  customer: any;
  angForm: FormGroup;
  title = 'Edit Customer';
  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
      telephone: ['', Validators.required ]
   });
  }

  updateCustomer(firstName, lastName, email, telephone) {
    this.route.params.subscribe(params => {
    this.customerService.updateCustomer(firstName, lastName, email, telephone, params['id']);
    this.router.navigate(['index']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customer = this.customerService.editCustomer(params['id']).subscribe(res => {
        this.customer = res;
      });
    });
  }
}