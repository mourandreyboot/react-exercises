import { type  ReactNode } from "react"

interface PageTitleProps {
    title: string
}
export function PageTitle ({title}: PageTitleProps) {
    return (
        <h1>
            Título da página
        </h1>
    )
}