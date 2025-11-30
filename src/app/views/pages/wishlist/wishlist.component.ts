import { Component, inject } from '@angular/core';
import { ServiceService } from '../../component/services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  items: any

  res = inject(ServiceService)
  ngOnInit(): void {
    this.showData()
  }

  showData() {
    this.res.get().subscribe((res) => {
      this.items = res
    })
  }
}
