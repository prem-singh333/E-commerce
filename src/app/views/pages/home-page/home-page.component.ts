import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from '../../component/services/service.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  items: any;

  res = inject(ServiceService)
  router = inject(Router)

  ngOnInit(): void{
    this.showData()
  }
  
  showData(){
    this.res.get().subscribe((res) => {
        this.items = res
    })
  }

    goSearchbar(){
    this.router.navigate(["/searchBar"])
  }
}
