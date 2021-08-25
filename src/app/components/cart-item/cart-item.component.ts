import {Component, Input} from "@angular/core"
import {Product} from "../../interfaces/product"
import {CartService} from "../../services/cart/cart.service"

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"]
})
export class CartItemComponent {
  @Input() product: Product = {
    id: 0,
    name: "",
    price: 0,
    url: "",
    description: ""
  }
  quantity = 1

  constructor (private cartService: CartService) {
  }
  updateQuantity(): void {
    this.cartService.updateQuantityOfProduct(this.quantity, this.product)
  }
  removeFromCart (): void {
    this.cartService.removeProductFromCart(this.product)
  }
}
