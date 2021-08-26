import {Component, Input} from "@angular/core"
import {EmptyProduct, Product} from "../../interfaces/product"
import {CartService} from "../../services/cart/cart.service"

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent {
  @Input() product: Product = EmptyProduct
  quantity = 1

  constructor (private cartService: CartService) {
  }
  addToCart (): void {
    this.cartService.addProductToCart(this.quantity, this.product)
  }
}
