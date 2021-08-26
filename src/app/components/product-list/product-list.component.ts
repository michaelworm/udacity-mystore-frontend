import {Component, OnInit} from "@angular/core"
import {ProductDataService} from "../../services/product-data/product-data.service"
import {Product} from "../../interfaces/product"

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = []

  constructor (private productDataService: ProductDataService) {
  }
  ngOnInit (): void {
    this.productDataService.getData().subscribe((res: Array<Product>) => this.products = res)
  }
}
