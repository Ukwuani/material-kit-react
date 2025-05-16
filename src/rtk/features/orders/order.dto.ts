
export interface Location {
  id: string
  address: string
  geom: any
  createdAt: string
}

export interface Locker {
  id: string
  lockerCode: string
  isAvailable: string
  location?: Location
  createdAt: string
}


export interface Order {
    id: string
    senderName: string
    senderEmail: string
    senderPhone: string
    receiverName: string
    receiverEmail: boolean
    receiverPhone	: string
    insurancePackage: boolean
    totalCost?: number,
    status: string
    createdAt: string
    trackingId: string
    pickupLocker: Locker
    destinationLocker: Locker
  }
  