import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './views/component/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BottomNavbarComponent } from './views/component/bottom-navbar/bottom-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BottomNavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  showNavbar: boolean = true
  bottomNav: boolean = true

  router = inject(Router)

    ngOnInit():void{
     this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){

        let currentUrl = event.urlAfterRedirects

        if(currentUrl === "/products" || currentUrl === "/searchBar" || currentUrl === '/profile'){
          this.showNavbar = false
        }
        else{
          this.showNavbar = true
        }


        if(/^\/[a-zA-Z0-9_-]+$/.test(currentUrl)){
          this.bottomNav = true
        }
        else{
          this.bottomNav = false
        }

        if(currentUrl === "/cart" || currentUrl === "/searchBar"){
          this.bottomNav = false
        }
      }
     });
  }
  title = 'frontend';
}
