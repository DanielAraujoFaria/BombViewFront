'use client'

import { create } from "@/app/actions/filmes/create";
import TopNavBar from "@/components/TopNavBar"
import { useFormState } from "react-dom"
import Link from "next/link"
import { Button } from "@nextui-org/react"
import { Input } from "@nextui-org/react";
import { SubmitButton } from "@/components/SubmitButton"
import { ArrowLeft } from "lucide-react";

const initialState = {
    messageNome: '',
}

export default async function CadastrarReviews() {
    const [state, formAction] = useFormState(create, initialState)

    return (
        <main className="flex min-h-screen flex-col items-center ">

            <TopNavBar />

            <div className="flex flex-col pt-10 w-4/6"></div>

            <div className="mx-10">
                <section className="bg-[#0E0D17] rounded-[20px] w-full p-2 m-4">
                    <div className="pt-5 pl-4">
                        <Link href="/meusreviews">
                            <Button isIconOnly color="default"><ArrowLeft /></Button>
                        </Link>
                    </div>
                    <h2 className="text-2xl font-semibold pt-6 ps-5 mb-2" >Reviews</h2>
                    <form action={formAction} className="flex flex-col gap-3 m-6 rounded-[20px] min-w-[500px]">
                        <h2 className="flex justify-start">É Hora do Review!</h2>
                        <div className="group flex flex-col w-full group relative justify-end text-white data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]">
                            <Input
                                key="filmes"
                                label="Filme"
                                name="filmes"
                                variant="bordered"
                                labelPlacement={"outside"}
                                isInvalid={state?.messageNome != ''}
                                errorMessage={state?.messageNome}

                            />
                            <Input
                                key="tipo"
                                label="Tipo"
                                name="tipo"
                                variant="bordered"
                                labelPlacement={"outside"}
                                className="text-black bg-white border-gray-300"
                                isInvalid={state?.messageNome != ''}
                                errorMessage={state?.messageNome}
                            />
                            <Input
                                key="rating"
                                label="Rating"
                                name="rating"
                                variant="bordered"
                                labelPlacement={"outside"}
                                isInvalid={state?.messageNome != ''}
                                errorMessage={state?.messageNome}
                            />
                            <Input
                                key="comentario"
                                label="Comentário"
                                name="comentario"
                                variant="bordered"
                                labelPlacement={"outside"}
                                isInvalid={state?.messageNome != ''}
                                errorMessage={state?.messageNome}
                            />
                        </div>
                        <div className="flex justify-around mt-4">
                            <Link href="/meusreviews">
                                <SubmitButton />
                            </Link>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    )
}