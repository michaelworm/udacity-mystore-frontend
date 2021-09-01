export interface UpdateQuantityData {
  quantity: number,
  productId: number
}

export interface Customer {
  fullName: string,
  address: string,
  creditCard: number | null
}

export const EmptyCustomer: Customer = {
  fullName: "",
  address: "",
  creditCard: null
}
