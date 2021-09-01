import {Component, EventEmitter, Output} from "@angular/core"
import {Customer, EmptyCustomer} from "../../interfaces/cart"

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  customer: Customer = EmptyCustomer
  @Output() registeredCustomer: EventEmitter<Customer> = new EventEmitter<Customer>()

  registerCustomerSubmit (): void {
    this.registeredCustomer.emit(this.customer)
  }
}
