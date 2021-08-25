import {Component} from "@angular/core"
import {Product} from "../../interfaces/product"
import {CartService} from "../../services/cart/cart.service"

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  cart: Array<Product> = []

  constructor (private cartService: CartService) {
    this.cart = this.cartService.getCart()
  }
}
