import { type ReactNode } from "react"

type TripStatus = "on-time" | "delayed" | "cancelled"

interface TripProps {
    children: ReactNode,
    id: string,
    origin: string,
    destination: string,
    departureDate: string,
    arrivalDate: string,
    price: number,
    hasWifi: boolean,
    hasOulets: boolean,
    almostFull: boolean,
    status: TripStatus
}

