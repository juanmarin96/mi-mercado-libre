import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../service/product-list.service';
import { Product } from '../model/product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    productName: string = "";
    productsList: Product[] = [];

    constructor(private productListService: ProductListService) { }

    ngOnInit() {
        
    }

    searchProduct() {
        this.productListService.getProduct(this.productName).subscribe(products=>{
            this.productsList = products;
        })
    }
}
