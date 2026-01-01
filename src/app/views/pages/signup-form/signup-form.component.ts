import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceService } from '../../component/services/service.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent implements OnInit{

  // service = inject(ServiceService)

  fb = inject(FormBuilder)
  service = inject(ServiceService)
  router = inject(Router)
  signUpForm: any

  isPassword: boolean = true

  ngOnInit(): void{
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

    // console.log(new Date().getTime())
  }

  onSubmit(){
    // this.service.userAdd(this.signUpForm).subscribe(res => {
    //   console.log(res)
    // })

    let value = this.signUpForm.getRawValue()
    if(this.signUpForm.valid){
      this.service.userAdd(value).subscribe()
      this.router.navigate(['/login'])
      // console.log(value)
      this.signUpForm.reset()
    }
    else{
      // debugger
      console.log("please fill all details")
    }
  }

  passHideShow(){
    this.isPassword = !this.isPassword

    console.log(this.isPassword)
  }
}
