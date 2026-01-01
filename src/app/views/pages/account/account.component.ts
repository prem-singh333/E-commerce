import { Component, inject } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  location = inject(Location)

  router = inject(Router)

  goBack(){
    this.location.back()
  }

  logOut(){
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("expireToken")
    localStorage.removeItem("authToken")

    this.router.navigate(["/login"])
  }
}
