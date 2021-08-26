import {Component, OnInit} from "@angular/core"
import {ActivatedRoute} from "@angular/router"
import {ProductDataService} from "../../services/product-data/product-data.service"
import {CartService} from "../../services/cart/cart.service"
import {EmptyProduct, Product} from "../../interfaces/product"

@Component({
  selector: "app-product-item-detail",
  templateUrl: "./product-item-detail.component.html",
  styleUrls: ["./product-item-detail.component.css"]
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = EmptyProduct
  productId: number = 0
  quantity: number = 1

  constructor (
    private productDataService: ProductDataService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit (): void {
    this.productId = parseInt(this.route.snapshot.paramMap.get('id') as string, 10);

    this.productDataService.getData().subscribe((res: Array<Product>) => {
      this.product = res.filter(({id}) => id === this.productId)[0]
    })
  }
  addToCart (): void {
    this.cartService.addProductToCart(this.quantity, this.product)
  }
}
