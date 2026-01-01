import { CommonModule, Location} from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent implements AfterViewInit{

   @ViewChild("searchBar") searchBar!: ElementRef

  location = inject(Location)


  ngAfterViewInit(): void {
   this.searchBar.nativeElement.focus()
  }

  goBack(){
    this.location.back()
  }
}
