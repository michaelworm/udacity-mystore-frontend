export interface Product {
  id: number,
  name: string,
  price: number,
  url: string,
  description: string
}

export interface CartProduct extends Product {
  quantity: number
}

export const EmptyProduct: Product = {
  id: 0,
  name: "",
  price: 0,
  url: "",
  description: ""
}
