"use client"

import { update } from "@/app/actions/filmes/update";
import { FilmeSelect } from "@/components/FilmeSelect";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Input, Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import { ArrowDown, ArrowUp, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
    messageNome: '',
}

export function EditForm(props: { filmes: Array<Filme> }) {
    const { filmes } = props
    const [state, formAction] = useFormState(update, initialState)

    return (
        <form action={formAction} className="flex flex-col gap-3 bg-[#0E0D17] p-6 m-6 rounded-[20px] min-w-[500px]">
            <h2 className="text-2xl font-bold">Nova Review</h2>
            <Link href="/meusreviews">
                <Button isIconOnly><ArrowLeft /></Button>
            </Link>

            <FilmeSelect filmes={filmes} />

            <RadioGroup
                name="tipo"
                label="Tipo"
                orientation="horizontal"
            >
                <Radio value="ASSISTIDO" className="mr-5">
                    <div className="flex gap-2 items-center">
                        <ArrowDown className="text-green-500" />
                        <span>Assistido</span>
                    </div>
                </Radio>
                <Radio value="NÃO ASSISTIDO">
                    <div className="flex gap-2 items-center">
                        <ArrowUp className="text-red-500" />
                        <span>Não Assistido</span>
                    </div>
                </Radio>
            </RadioGroup>

            <Input
                key="rating"
                label="Rating"
                name="rating"
                type="number"
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

            <div className="flex justify-around mt-4">
                <SubmitButton />
            </div>
        </form>
    )
}