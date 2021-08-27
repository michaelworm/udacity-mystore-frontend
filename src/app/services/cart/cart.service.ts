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
    const productAlreadyInCart: CartProduct | undefined = this.cart.find(({id}) => id === product.id)

    if (!productAlreadyInCart) {
      this.cart.push({
        ...product,
        quantity
      })
    } else {
      const productAlreadyInCartIndex: number = this.cart.indexOf(productAlreadyInCart)
      const updatedProduct: CartProduct = {
        ...productAlreadyInCart,
        quantity: productAlreadyInCart.quantity + quantity
      }

      this.cart.splice(productAlreadyInCartIndex, 1, updatedProduct)
    }

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
  getCartTotal (): number {
    let total = 0

    this.cart.forEach(({price, quantity}) => {
      total += price * quantity
    })

    return total
  }
}
