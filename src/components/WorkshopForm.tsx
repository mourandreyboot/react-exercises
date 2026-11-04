import { FormEvent } from "react";

export default function WorkshopForm() {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault();

        const data = new FormData(event.currentTarget)
        const values = Object.fromEntries(data.entries())
        console.log(JSON.stringify(values, null, 2))
    }
        return (
        <>
            <form onSubmit={handleSubmit}>
                <label for="patientName">Nome do paciente</label>
                <input id="patientName" name="patientName" />

                <label for="email">Email de contacto</label>
                <input id="email" name="email" />

                <button type="submit">Enviar pedido</button>
            </form>
        </>
    )
}
