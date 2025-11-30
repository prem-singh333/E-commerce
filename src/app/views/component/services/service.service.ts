import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = "https://fakestoreapi.com/products";

  http = inject(HttpClient);

  get(): Observable<any> {
    return this.http.get(this.url)
  }

  productById(id: any): Observable<any> {
    return this.http.get(`${this.url}/${id}`)
  }
}
