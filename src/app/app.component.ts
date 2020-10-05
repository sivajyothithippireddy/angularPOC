import { Component } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  requirementForm: FormGroup;

  orderForm: FormGroup;
  items: FormArray;
  submitted=false;
  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      items: this.fb.array([ this.addBranch() ])
    });
  }
  ngOnInit() {
  }


  addBranch(): FormGroup {
    return this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]],
      confirmpassword: ['',[Validators.required]],
      branchname: ['',[Validators.required]],
      branchcountry: ['',[Validators.required]],
      mobile: ['',[Validators.required,Validators.pattern((/^\(?([6-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/))]],
      branchAddress: ['',[Validators.required]],

      
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.addBranch());
  }

  // submitfun(){
  //   this.submitted=true
  //   if (this.orderForm.invalid) {
  //     return;
  // }
  // }

}