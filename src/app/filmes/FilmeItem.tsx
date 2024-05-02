"use client"


import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { destroy } from "../actions/filmes/destroy";
import { Icon } from "../../components/Icon";
import { DropDownActions } from "../../components/DropDownActions";
import FilmesBoard from "@/components/FilmesBoard";

interface FilmeItemProps {
    filme: Filme
}

export function FilmeItem(props: FilmeItemProps){
    const router = useRouter()
    const { filme } = props

    function handleDelete(){
        toast.promise(
            destroy(filme.id),
             {
               loading: 'excluindo...',
               success: "Excluída com sucesso!",
               error: "Erro ao excluir.",
             }
           );
    }

    return (
        <main>
        <div key={filme.id} className="flex flex-col justify-evenly py-2" id="data-row">
            <FilmesBoard />
            <div className="flex gap-24 items-center mt-4 mx-4">
                <span>{filme.nome}</span>
                <span>{filme.genero}</span>         
                <span className="flex justify-center border-solid border-white border-2 p-0.5 rounded-[5px] w-1/6">{filme.classificacao}</span>
                <span>{filme.duracao}</span>
                <span>{filme.descricao}</span>
                <section>
                    <DropDownActions 
                        onEdit={() => router.push(`/filmes/${filme.id}`)}
                        onDelete={handleDelete} 
                    />
                </section>
            </div>
           
        </div>
        </main>
    )
}