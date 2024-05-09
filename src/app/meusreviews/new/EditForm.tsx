"use client"

import { create } from "@/app/actions/meusreviews/create";
import { FilmeSelect } from "@/components/FilmeSelect";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Input, Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import { ArrowDown, ArrowUp, ArrowLeft, Bomb, Popcorn } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
    message_comentario: '',
    message_rating: '',
}

export function EditForm(props: { filmes: Array<Filme> }) {
    const { filmes } = props

    const [state, formAction] = useFormState(create, initialState)

    return (
        <form action={formAction} className="flex flex-col gap-3 bg-[#0E0D17] p-6 m-6 rounded-[20px] min-w-[500px]">
            <Link href="/meusreviews">
                <Button isIconOnly><ArrowLeft /></Button>
            </Link>
            <h2 className="text-2xl font-bold">Nova Review</h2>

            <FilmeSelect filmes={filmes} className="text-gray-500"/>

            <RadioGroup
                name="tipo"
                label="Tipo"
                orientation="horizontal"
            >
                <Radio value="ASSISTIDO" className="mr-5">
                    <div className="flex gap-2 items-center">
                        <Popcorn className="text-blue-600" />
                        <span className="text-gray-500">Assistido</span>
                    </div>
                </Radio>
                <Radio value="NÃO ASSISTIDO">
                    <div className="flex gap-2 items-center">
                        <Bomb className="text-red-600" />
                        <span className="text-gray-500">Não Assistido</span>
                    </div>
                </Radio>
            </RadioGroup>

            <Input
                type="number"
                pattern="[0-9]*"
                key="rating"
                label={<label className="text-gray-500">Rating</label>}
                name="rating"
                variant="bordered"
                labelPlacement={"outside"}
                isRequired={true}
                isInvalid={state?.message_rating != ''}
                errorMessage={state?.message_rating}
            />

            <Input
                key="comentario"
                label={<label className="text-gray-500">Comentário</label>}
                name="comentario"   
                variant="bordered"
                labelPlacement={"outside"}
                isRequired={true}
                isInvalid={state?.message_comentario != ''}
                errorMessage={state?.message_comentario}
            />

            <div className="flex justify-around mt-4">
                <SubmitButton />
            </div>
        </form>
    )
}