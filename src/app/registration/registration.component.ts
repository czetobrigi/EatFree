import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  success = false;
  loading = false;

  constructor(private formBuilder: FormBuilder) {   }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      passWord: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(){
    this.submitted = true;
    if(this.registrationForm.invalid){
      return;
    } this.success = true;

  }

}
