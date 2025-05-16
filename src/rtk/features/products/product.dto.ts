
export interface Product {
  id: string
  name:	string
  description:	string
  size:	string
  price:	number
  weight:	any
  createdAt:	string
  updatedAt:	string
  totalUnitsSold: number
  viewCount: number
  stock: number
  quantityPerPack: string
  capacity: string
  category: string
  color: string
  colorOption: Array<string>
  availableSizes: Array<string>
  imageUrl: string
  imagePublicId: string
  status: 'sale'
}
  