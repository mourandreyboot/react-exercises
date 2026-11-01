import { type  ReactNode } from "react"
type ButtonVariant = "success" | "warning" | "info" | "danger" | "normal"

interface ButtonProps {
    children: ReactNode,
    variant?: ButtonVariant
}
export default function Button({ children, variant }: ButtonProps) {
    
    //LÓGICA
    const success = 'bg-green-300 text-green-700 hover:bg-green-400/60'
    const warning = 'bg-orange-300 text-orange-700 hover:bg-orange-400/60'
    const info = 'bg-blue-300 text-blue-700 hover:bg-blue-400/60'
    const danger = 'bg-red-300 text-red-700 hover:bg-red-400/60'
    const normal= 'bg-stone-300 text-stone-700 hover:bg-stone-400/60'

    function handleVariant(variant: ButtonVariant | undefined) {
        if(variant === "success"){
            return success
        }
        if(variant === "warning"){
            return warning
        }
        if(variant === "info"){
            return info
        }
        if(variant === "danger"){
            return danger
        }
        return normal
            
    }
    return (
    <>
        <button className= {`${handleVariant(variant)} rounded-md px-2 py-1 
        font-medium hover:cursor-pointer transition-all text-sm`}>
            {children}
        </button>
    </>
    )
}