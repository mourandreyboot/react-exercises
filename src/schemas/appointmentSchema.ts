import { z } from "zod";

export const appointmentSchema = z.object({
    patientName: z.string().trim().min(2, { error: "Indique o nome do participante." }),
    email: z.email({ error: "Indique endereço de email válido."})
})