import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { ServiceService } from '../../component/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  addProductForm: any

  fb = inject(FormBuilder)
  service = inject(ServiceService)
  router = inject(Router)

  ngOnInit(): void {

    this.addProductForm = this.fb.group({
      title: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      discription: ['', [Validators.required]],
      category: ['', [Validators.required]],
      subCategory: ['', [Validators.required]],
      sellingPrice: ['', [Validators.required, Validators.minLength(1)]],
      orignalPrice: ['', [Validators.required, Validators.minLength(1)]],
      colors: this.fb.array([])
    })
  }

  get colors(): FormArray {
    return this.addProductForm.get('colors') as FormArray
  }

  getImage(idx: number): FormArray {
    return this.colors.at(idx).get('image') as FormArray
  }

  getSize(idx: number): FormArray {
    return this.colors.at(idx).get('size') as FormArray
  }

  addColors() {
    let colorGroup = this.fb.group({
      image: this.fb.array([]),
      size: this.fb.array([])
    })

    this.colors.push(colorGroup)
  }

  addImage(idx: number) {
    this.getImage(idx).push(
      this.fb.control('')
    )
  }

  addSize(idx: number) {
    this.getSize(idx).push(
      this.fb.control('')
    )
  }

  removeColor(idx: number) {
    this.colors.removeAt(idx)
  }

  removeImg(colorIdx: number, idx: number) {
    this.getImage(colorIdx).removeAt(idx)
  }

  removeSize(colorIdx: number, idx: number) {
    this.getSize(colorIdx).removeAt(idx)
  }

  onSubmit() {
    if(this.addProductForm.valid){
      let value = this.addProductForm.getRawValue()
      this.service.post(value).subscribe(res => {
        console.log(res)
        this.router.navigate(["/"])
      })
    }else{
      console.log("please fill all input fields")
    }
  }
}

