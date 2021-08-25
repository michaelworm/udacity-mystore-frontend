import {Injectable} from "@angular/core"
import {CartProduct, Product} from "../../interfaces/product"

@Injectable({
  providedIn: "root"
})
export class CartService {
  cart: Array<CartProduct> = []

  getCart (): Array<CartProduct> {
    return this.cart
  }
  addProductToCart (quantity: number, product: Product): void {
    this.cart.push({
      ...product,
      quantity
    })

    alert("Added to cart!")
  }
  removeProductFromCart (product: Product): void {
    this.cart = this.cart.filter(({id}) => id !== product.id)

    alert("Removed from cart!")
  }
  updateQuantityOfProduct (quantity: number, product: Product): void {
    this.cart = this.cart.map((cartProduct) => {
      if (cartProduct.id === product.id) {
        cartProduct.quantity = quantity
      }

      return cartProduct
    })
  }
}
