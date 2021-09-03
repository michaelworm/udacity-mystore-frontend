import {Component, EventEmitter, Output} from "@angular/core"
import {Customer, EmptyCustomer} from "../../interfaces/cart"

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  customer: Customer = EmptyCustomer
  isNameValid: boolean = true
  @Output() registeredCustomer: EventEmitter<Customer> = new EventEmitter<Customer>()

  registerCustomerSubmit (): void {
    this.registeredCustomer.emit(this.customer)
  }

  checkValidName(value: Event) {
    const regex = /^[A-Za-z0-9]+$/

    this.isNameValid = regex.test(value as unknown as string)
  }
}
