import {Component, OnInit} from "@angular/core"
import {Product} from "../../interfaces/product"
import {CartService} from "../../services/cart/cart.service"

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart: Array<Product> = []

  constructor (private cartService: CartService) {

  }
  ngOnInit (): void {
    this.loadCart()
  }
  loadCart (): void {
    this.cart = this.cartService.getCart()
  }
  removeItemFromCart (product: Product): void {
    this.cartService.removeProductFromCart(product)
    this.loadCart()
  }
}
