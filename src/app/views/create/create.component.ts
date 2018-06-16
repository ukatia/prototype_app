import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer-service/customer.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Create Customer';
  angForm: FormGroup;
  constructor(private customerService: CustomerService, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  addCustomer(firstName, lastName, email, telephone) {
    this.customerService.addCustomer(firstName, lastName, email, telephone);
  }

  createForm() {
    this.angForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
      telephone: ['', Validators.required ]
   });
  }

}