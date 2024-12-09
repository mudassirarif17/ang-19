import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet , ProductCardComponent , SearchComponent , CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  type = 4;
  // products = [1,2,3,4,5];
  products = [
    {
      "id" : "1",
      "name" : "Red Polo T-Shirt",
      "desc" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, vel!",
      "cprice" : 1000,
      "sprice" : 2000,
      "dis" : "50%"
    },
    {
      "id" : "2",
      "name" : "Blue Polo T-Shirt",
      "desc" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, vel!",
      "cprice" : 800,
      "sprice" : 1600,
      "dis" : "50%"
    },
    {
      "id" : "3",
      "name" : "Green Polo T-Shirt",
      "desc" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, vel!",
      "cprice" : 800,
      "sprice" : 1600,
      "dis" : "50%"
    },
    {
      "id" : "4",
      "name" : "Yellow Polo T-Shirt",
      "desc" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, vel!",
      "cprice" : 800,
      "sprice" : 1600,
      "dis" : "50%"
    },
    {
      "id" : "5",
      "name" : "Brown Polo T-Shirt",
      "desc" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, vel!",
      "cprice" : 800,
      "sprice" : 1600,
      "dis" : "50%"
    }
];

filteredProduct : any[] = [];

ngOnInit(){
  this.filteredProduct = this.products;
}

onViewProduct(event:any){
  console.log("onViewProduct" , event);
}



Onsearch(search : string){
  console.log(search);
  console.log("search");
  if(search){
      this.filteredProduct = this.products.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
    }
    else{
      this.filteredProduct = this.products;
    }
}


}
