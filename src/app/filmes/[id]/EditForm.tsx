"use client"

import { update } from "@/app/actions/filmes/update";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
    messageNome: '',
}

export function EditForm(filme: Filme) {
    const [state, formAction] = useFormState(update, initialState)

    return (

        <form action={formAction} className="flex flex-col gap-3 bg-[#0E0D17] p-6 m-6 rounded-[20px] min-w-[500px]">
            <Link href="/filmes">
                <Button isIconOnly><ArrowLeft /></Button>
            </Link>
            <input type="hidden" name="id" value={filme.id} />
            <h2 className="text-2xl font-bold">Editar {filme.nome}</h2>
            <Input
                key="nome"
                label="Nome"
                name="nome"
                defaultValue={filme.nome}
                className="text-white"
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
            />
            <Input
                key="genero"
                label="Gênero"
                name="genero"
                defaultValue={filme.genero}
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
            />
            <Input
                key="duracao"
                label="Duração"
                name="duracao"
                defaultValue={filme.duracao}
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
            />
            <Input
                key="classificacao"
                label="Classificação"
                name="classificacao"
                defaultValue={filme.classificacao}
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
            />
            <Input
                key="descricao"
                label="Descrição"
                name="descricao"
                defaultValue={filme.descricao}
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