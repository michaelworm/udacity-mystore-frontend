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
  removeProductFromCart (productId: number): void {
    this.cart = this.cart.filter(({id}) => id !== productId)

    alert("Removed from cart!")
  }
  updateQuantityOfProduct (quantity: number, productId: number): void {
    this.cart = this.cart.map((cartProduct) => {
      if (cartProduct.id === productId) {
        cartProduct.quantity = quantity
      }

      return cartProduct
    })
  }
  getCartTotal() : number {
    let total = 0

    this.cart.forEach(({price, quantity}) => {
      total += price * quantity
    })

    return total
  }
}
