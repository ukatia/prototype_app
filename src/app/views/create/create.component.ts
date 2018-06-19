import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer-service/customer.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Create Customer';
  angForm: FormGroup;
  constructor(private customerService: CustomerService, private fb: FormBuilder, private router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  addCustomer(firstName, lastName, email, telephone) {
    this.customerService.addCustomer(firstName, lastName, email, telephone).subscribe(res => {
            if ('customer' in res) {
              this.router.navigate(['/index']);
            }
         }
     );
  }

  createForm() {
    this.angForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', [Validators.required,  Validators.pattern("[^ @]*@[^ @]*")] ],
      telephone: ['', [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)] ]
   });
  }

}