import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../../component/services/service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  fb = inject(FormBuilder)
  service = inject(ServiceService)
  router = inject(Router)

  isPassword: boolean = true;
  logInForm: any

  ngOnInit(): void{
    this.logInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }


  loggedIn(){
    let value = this.logInForm.getRawValue()
    if(this.logInForm.valid){
      this.service.getUser(value).subscribe(res => {
        if(res){
          this.router.navigate(["/products"])
        }else{
          console.log("Invalid user")
        }
      })
    }else{
      console.log("please fill the details")
    }
  }


  passHideShow(){
    this.isPassword = !this.isPassword
  }

}
