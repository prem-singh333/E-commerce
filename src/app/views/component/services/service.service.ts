import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  isLoggedIn = new BehaviorSubject<boolean>(false)

  // userId: any

  // productUrl = "http://10.45.240.27:3000/products";
  // cartUrl = "http://10.45.240.27:3000/cart";
  // userUrl = "http://10.45.240.27:3000/users";

  
  productUrl = "http://localhost:3000/products";
  cartUrl = "http://localhost:3000/cart";
  userUrl = "http://localhost:3000/users";

  http = inject(HttpClient);

  post(data: any): Observable<any> {
    return this.http.post(this.productUrl, data)
  }

  get(): Observable<any> {
    return this.http.get(this.productUrl)
  }

  productById(id: any): Observable<any> {
    return this.http.get(`${this.productUrl}/${id}`)
  }

  addToCart(cartData: any): Observable<any> {
    return this.http.post(this.cartUrl, cartData)
  }

  getCartData(): Observable<any> {
    return this.http.get(this.cartUrl)
  }

  userAdd(data: any): Observable<any> {
    return this.http.post(this.userUrl, data)
  }

  getUser(data: any): Observable<any> {
    let email = data.email
    let pass = data.password
    console.log("data",data)
    return this.http.get<any[]>(this.userUrl).pipe(
      map(users => {
        
        let user = users.find(res => res.email === email && res.password === pass)
        // this.userId = user
        
        if(user){
          console.log("user",user)
          console.log(user)
          localStorage.setItem("isLoggedIn", "true")
          localStorage.setItem("authToken", "authrizedUser");

          localStorage.setItem("userId", user.id)
          let expireAt = new Date().getTime() + 30 * 60 * 1000
          localStorage.setItem("expireToken", expireAt.toString())

          this.isLoggedIn.next(true);
          return user
        }else{
          console.log("Invalide user!")
        }
      })
    )
  }
}
