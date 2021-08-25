import {Injectable} from "@angular/core"
import {CartProduct, Product} from "../../interfaces/product"

@Injectable({
  providedIn: "root"
})
export class CartService {
  cart: Array<CartProduct> = []

  getCart (): Array<CartProduct> {
    return [{
      id: 1,
      name: "Book",
      price: 9.99,
      url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "You can read it!",
      quantity: 3
    }]
    //return this.cart
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
