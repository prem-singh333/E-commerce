import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  location = inject(Location)
  router = inject(Router)

    goBack(){
    this.location.back()
  }

  goSearchbar(){
    this.router.navigate(["/searchBar"])
  }
}
