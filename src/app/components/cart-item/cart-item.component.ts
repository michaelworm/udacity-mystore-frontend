import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core"
import {CartProduct, EmptyCartProduct} from "../../interfaces/product"
import {UpdateQuantityData} from "../../interfaces/cart"

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"]
})
export class CartItemComponent implements OnInit {
  @Input() product: CartProduct = EmptyCartProduct
  @Output() removeFromCartClicked: EventEmitter<number> = new EventEmitter<number>()
  @Output() updateQuantityClicked: EventEmitter<UpdateQuantityData> = new EventEmitter<UpdateQuantityData>()
  quantity = 1

  ngOnInit () {
    this.quantity = this.product.quantity
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
