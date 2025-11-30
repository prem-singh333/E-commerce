import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from '../../component/services/service.service';
import { ActivatedRoute, Router, NavigationEnd, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-product',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.css'
})
export class ShowProductComponent implements OnInit{
  product: any
  items: any

  service = inject(ServiceService)
  route = inject(ActivatedRoute)
  router = inject(Router)

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      let result = res.get("id")
      this.service.productById(result).subscribe((res) => {
        this.product = res
      })

    })

    this.service.get().subscribe((res) => {
      this.items = res
    })

    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        window.scrollTo({top: 0, behavior: 'instant' as ScrollBehavior})
        // console.log(window.navigator)
      }

    })

  }
}
