import { login } from "./actions";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-pampas-200">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="mx-auto flex justify-center items-center"><Logo /></div>
                <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-pampas-900">
                    Faça login na sua conta
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="bg-white px-6 py-12 shadow-sm sm:rounded-lg sm:px-12">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Endereço de e-mail
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-vermilion-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Senha
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-vermilion-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex gap-3">
                                <div className="flex h-6 shrink-0 items-center">
                                    <div className="group grid size-4 grid-cols-1">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-vermilion-600 checked:bg-vermilion-600 indeterminate:border-vermilion-600 indeterminate:bg-vermilion-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vermilion-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                        />
                                        <svg
                                            fill="none"
                                            viewBox="0 0 14 14"
                                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                        >
                                            <path
                                                d="M3 8L6 11L11 3.5"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="opacity-0 group-has-checked:opacity-100"
                                            />
                                            <path
                                                d="M3 7H11"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="opacity-0 group-has-indeterminate:opacity-100"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <label htmlFor="remember-me" className="block text-sm/6 text-gray-900">
                                    Lembrar de mim
                                </label>
                            </div>

                            <div className="text-sm/6">
                                <button type="button" className="font-semibold text-vermilion-600 hover:text-vermilion-500">
                                    Esqueceu a senha?
                                </button>
                            </div>
                        </div>

                        <div>
                            <Button
                                formAction={login}
                                type="submit"
                                className="w-full">Entrar</Button>
                        </div>
                    </form>

                    <div>
                        <div className="relative mt-10">
                            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm/6 font-medium">
                                <span className="bg-white px-6 text-gray-900">Ou continue com</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-4">
                            <a
                                href="#"
                                className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:ring-transparent"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                                    <path
                                        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                                        fill="#EA4335"
                                    />
                                    <path
                                        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                                        fill="#34A853"
                                    />
                                </svg>
                                <span className="text-sm/6 font-semibold">Google</span>
                            </a>

                            <a
                                href="#"
                                className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:ring-transparent"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                                    <path
                                        d="M16.365 1.43c0 1.14-.46 2.27-1.2 3.1-.74.83-1.96 1.43-3.1 1.34-.15-1.12.4-2.3 1.1-3.06.74-.83 2.03-1.5 3.2-1.48zM20.5 17.5c-.8 1.2-1.6 2.4-2.8 2.4-1.2 0-1.6-.8-3-.8-1.4 0-1.8.8-3 .8-1.2 0-2-1.2-2.8-2.4-1.6-2.4-2.8-6.8-1.2-9.6.8-1.2 2-2 3.2-2 .8 0 1.6.6 2.8.6 1.2 0 1.6-.6 2.8-.6 1.2 0 2.4.6 3.2 2 .4.6.6 1.2.8 2-.03.02-2.4 1-2.4 3.4 0 2.8 2.4 3.6 2.4 3.6z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span className="text-sm/6 font-semibold">Apple</span>
                            </a>
                        </div>
                    </div>
                </div>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Não é um membro?{' '}
                    <Link href={"/auth/register"} className="cursor-pointer font-semibold text-vermilion-600 hover:text-vermilion-500">Inicie um teste gratuito de 14 dias</Link>
                </p>
            </div>
        </div>
    )
}