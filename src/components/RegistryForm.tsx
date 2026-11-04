import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrySchema, type RegistryInput, type RegistryOutput } from "../schemas/registrySchema";

const inputClass =
    "rounded-md border border-neutral-300 px-3 py-1.5 aria-[invalid=true]:border-red-500";
const errorClass = "text-sm text-red-600";

export default function RegistryForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<RegistryInput, unknown, RegistryOutput>({
        resolver: zodResolver(registrySchema),
        mode: "onChange",
        defaultValues: { name: "", nickname: "", birthDate: "", email: "", password: "" },
    });

    function onSubmit(data: RegistryOutput) {
        console.log(JSON.stringify({ ...data, birthDate: data.birthDate.toDateString() }, null, 2));
        reset();
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
        >
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium text-neutral-700">Nome</label>
                <input
                    id="name"
                    type="text"
                    {...register("name")}
                    aria-invalid={Boolean(errors.name)}
                    className={inputClass}
                />
                {errors.name && <p role="alert" className={errorClass}>{errors.name.message}</p>}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="nickname" className="text-sm font-medium text-neutral-700">Apelido</label>
                <input
                    id="nickname"
                    type="text"
                    {...register("nickname")}
                    aria-invalid={Boolean(errors.nickname)}
                    className={inputClass}
                />
                {errors.nickname && <p role="alert" className={errorClass}>{errors.nickname.message}</p>}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="birthDate" className="text-sm font-medium text-neutral-700">
                    Data de nascimento
                </label>
                <input
                    id="birthDate"
                    type="date"
                    {...register("birthDate")}
                    aria-invalid={Boolean(errors.birthDate)}
                    className={inputClass}
                />
                {errors.birthDate && <p role="alert" className={errorClass}>{errors.birthDate.message}</p>}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium text-neutral-700">Email</label>
                <input
                    id="email"
                    type="email"
                    {...register("email")}
                    aria-invalid={Boolean(errors.email)}
                    className={inputClass}
                />
                {errors.email && <p role="alert" className={errorClass}>{errors.email.message}</p>}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-sm font-medium text-neutral-700">Password</label>
                <input
                    id="password"
                    type="password"
                    {...register("password")}
                    aria-invalid={Boolean(errors.password)}
                    className={inputClass}
                />
                {errors.password && <p role="alert" className={errorClass}>{errors.password.message}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-300 text-green-700 hover:bg-green-400/60 rounded-md px-2 py-1
                font-medium hover:cursor-pointer transition-all text-sm
                disabled:cursor-not-allowed disabled:opacity-50"
            >
                Registar
            </button>
        </form>
    );
}
