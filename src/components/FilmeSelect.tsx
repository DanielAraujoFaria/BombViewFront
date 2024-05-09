'use client'

import { Select, SelectItem } from "@nextui-org/react";
import { ChangeEventHandler } from "react";

interface FilmeSelectProps  {
    filmes: Array<Filme>,
    onChange?: ChangeEventHandler
}

export function FilmeSelect({filmes, onChange}: FilmeSelectProps) {

    return (
        <Select
            items={filmes}
            label="Filme"
            variant="bordered"
            name="filme"
            placeholder="Selecione um Filme"
            labelPlacement="outside"
            onChange={onChange}
        >
            {(filme) => 
                <SelectItem key={filme.nome}>
                    {filme.nome}
                </SelectItem>
            }
        </Select>
    )
}