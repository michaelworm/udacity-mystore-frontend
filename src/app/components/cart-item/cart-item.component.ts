import {Component, EventEmitter, Input, Output} from "@angular/core"
import {EmptyProduct, Product} from "../../interfaces/product"
import {UpdateQuantityData} from "../../interfaces/cart"

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"]
})
export class CartItemComponent {
  @Input() product: Product = EmptyProduct
  @Output() removeFromCartClicked: EventEmitter<number> = new EventEmitter<number>()
  @Output() updateQuantityClicked: EventEmitter<UpdateQuantityData> = new EventEmitter<UpdateQuantityData>()
  quantity = 1

  constructor () {
  }
  updateQuantity (): void {
    this.updateQuantityClicked.emit({
      quantity: this.quantity,
      productId: this.product.id
    })
  }
  removeFromCart (): void {
    this.removeFromCartClicked.emit(this.product.id)
  }
}
