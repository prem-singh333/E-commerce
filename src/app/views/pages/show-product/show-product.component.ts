import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../../component/services/service.service';
import { ActivatedRoute, Router, NavigationEnd, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-product',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.css'
})
export class ShowProductComponent implements OnInit {

  @ViewChild('slideImage') slideImage!: ElementRef

  // fb = inject(FormBuilder)
  items: any
  user: any

  userId: any

  // cartItem: any[] = []

  product: any // main product like {title, brand, price, etc}
  variant: any //product variant like colors: {colorName, image, size}

  itemVariant: any

  quantity: number = 1
  size: any


  service = inject(ServiceService)
  route = inject(ActivatedRoute)
  router = inject(Router)
  // email: any;
  // password: any;

  ngOnInit(): void {

    // this.user = {
    //   email: this.email,
    //   pass: this.password
    // }
    this.productById()

    this.scrollBihav()

    this.defaultVariantSet()

    this.showData()

    this.userId = localStorage.getItem("userId")

    

    // this.service.getUser(this.user).subscribe(res => {
    //   console.log(res)
    // })
  }

  productById() {
    this.route.paramMap.subscribe((res) => {
      let result = res.get("id")
      this.service.productById(result).subscribe((res) => {
        this.product = res
        this.variant = res.colors
        // console.log(this.product)
        // console.log("variant:", this.variant )
      })

    })
  }

  showData() {
    this.service.get().subscribe(res => {
      this.items = res
    })
  }

  scrollBihav() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      }
    })
  }

  productVariant(item: any) {
    this.itemVariant = item
    // console.log(this.itemVariant)

    this.slideImage.nativeElement.scrollTo({ left: 0, behavior: 'instant' as ScrollBehavior })
  }

  defaultVariantSet() {
    this.route.paramMap.subscribe(res => {
      let id = res.get('id')

      this.service.productById(id).subscribe(res => {

        if (res.colors.length > 0) {
          let defaultVariant = res.colors[0];
          this.productVariant(defaultVariant)
        }
      })
    })
  }

  selectedSize(size: any) {
    this.size = size
    // console.log(this.size)
  }

  onInput(qty: any) {
    this.quantity = qty.target.value
    // console.log(this.quantity)
  }

  buyProduct() {
    console.log(this.product.id)
    console.log(this.itemVariant.image)
  }

  addCart() {

    let token = localStorage.getItem("isLoggedIn")

    // let items = 
    //     {
    //       productId: this.product.id,
    //       title: this.product.title,
    //       brand: this.product.brand,
    //       variant: {
    //         image: this.itemVariant.image,
    //         size: this.size
    //       },
    //       qty: this.quantity,
    //       price: this.product.sellingPrice,
    //       totalPrice: this.product.sellingPrice * this.quantity
        
    // }


    // if(token){
    //   console.log("product added in cart")

    //     let cartProduct = {

    //   userId: this.userId,
    //   cartItems: [
    //     {
    //       productId: this.product.id,
    //       title: this.product.title,
    //       brand: this.product.brand,
    //       variant: {
    //         image: this.itemVariant.image,
    //         size: this.size
    //       },
    //       qty: this.quantity,
    //       price: this.product.sellingPrice,
    //       totalPrice: this.product.sellingPrice * this.quantity

    //     }
    //   ]
    // }

    // console.log(cartProduct)
    // }else{
    //   console.log("you can't add in cart, becouse you nnot logged in")
    //   this.router.navigate(["/login"])
    // }

    // let cartProduct = {
    //   // userId: ""
    //   productId: this.product.id,
    //   title: this.product.title,
    //   brand: this.product.brand,
    //   variant: {
    //     image: this.itemVariant.image,
    //     size: this.size
    //   },
    //   qty: this.quantity,
    //   price: this.product.sellingPrice,
    //   totalPrice: this.product.sellingPrice * this.quantity
    // }

    
    // this.cartItem.push(cartProduct)
    // console.log(cartProduct)
    
    // this.service.addToCart(cartProduct).subscribe(res => {
    //   console.log(res)
    // })
  }
}
