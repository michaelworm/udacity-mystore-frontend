import {Component, EventEmitter, Input, Output} from "@angular/core"
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
  @Output() removeFromCartClicked: EventEmitter<Product> = new EventEmitter<Product>()
  quantity = 1

  constructor (private cartService: CartService) {
  }
  updateQuantity (): void {
    this.cartService.updateQuantityOfProduct(this.quantity, this.product)
  }
  removeFromCart (): void {
    this.removeFromCartClicked.emit(this.product)
  }
}
