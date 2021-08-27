import {Component, OnInit} from "@angular/core"
import {CartProduct} from "../../interfaces/product"
import {UpdateQuantityData} from "../../interfaces/cart"
import {CartService} from "../../services/cart/cart.service"

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart: Array<CartProduct> = []
  total: number = 0

  constructor (private cartService: CartService) {

  }
  ngOnInit (): void {
    this.loadCart()
    this.setCartTotal()
  }
  loadCart (): void {
    this.cart = this.cartService.getCart()
  }
  removeItemFromCart (productId: number): void {
    this.cartService.removeProductFromCart(productId)
    this.loadCart()
    this.setCartTotal()
  }
  updateQuantity (data: UpdateQuantityData): void {
    this.cartService.updateQuantityOfProduct(data.quantity, data.productId)
    this.setCartTotal()
  }
  setCartTotal () {
    this.total = this.cartService.getCartTotal()
  }
}
