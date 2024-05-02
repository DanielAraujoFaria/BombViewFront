"use client"


import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { destroy } from "../actions/filmes/destroy";
import { Icon } from "../../components/Icon";
import { DropDownActions } from "../../components/DropDownActions";

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
        <div key={filme.id} className="flex justify-between py-2" id="data-row">
            <div className="flex gap-1 items-center">
                <span>{filme.nome}</span>
            </div>
           
            <DropDownActions 
                onEdit={() => router.push(`/filmes/${filme.id}`)}
                onDelete={handleDelete} 
            />
        </div>
    )
}