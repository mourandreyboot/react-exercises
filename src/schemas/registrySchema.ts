import { z } from "zod";

export const registrySchema = z.object({
    name: z.string().trim().min(2, { error: "Indique o nome (mínimo 2 caracteres)." }),
    nickname: z.string().trim().min(2, { error: "Indique o apelido (mínimo 2 caracteres)." }),
    birthDate: z
        .iso.date({ error: "Indique uma data de nascimento válida." })
        .transform((value) => new Date(`${value}T00:00:00`))
        .refine((date) => date.getTime() < Date.now(), {
            error: "A data de nascimento deve ser no passado.",
        })
        .refine((date) => {
            const eighteen = new Date(date);
            eighteen.setFullYear(eighteen.getFullYear() + 18);
            return eighteen.getTime() <= Date.now();
        }, { error: "Deve ter pelo menos 18 anos." }),
    email: z.email({ error: "Indique um endereço de email válido." }),
    password: z
        .string()
        .min(8, { error: "A palavra-passe deve ter pelo menos 8 caracteres." })
        .regex(/[A-Z]/, { error: "A palavra-passe deve conter uma letra maiúscula." })
        .regex(/[0-9]/, { error: "A palavra-passe deve conter um número." }),
});

export type RegistryInput = z.input<typeof registrySchema>;
export type RegistryOutput = z.output<typeof registrySchema>;
