"use client"

import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/meusreviews/destroy";
import { DropDownActions } from "@/components/DropDownActions";
import ReviewsBoard from "@/components/ReviewsBoard";

interface ReviewItemProps {
    review: Review
}

export function ReviewItem({ review }: ReviewItemProps){
    const router = useRouter()

    function handleDelete(){
        toast.promise(
            destroy(review.id),
             {
               loading: 'excluindo...',
               success: "Excluída com sucesso!",
               error: "Erro ao excluir.",
             }
           );
    }

    return (
        <main>
        <div key={review.id} className="flex flex-col justify-evenly py-2" id="data-row">
            <ReviewsBoard />
            <div className="flex gap-24 items-center mt-4 mx-4">
                <span>{review.filmes}</span>
                <span>{review.tipo}</span>         
                <span>{review.rating}</span>
                <span>{review.comentario}</span>
                <section>
                    <DropDownActions 
                        onEdit={() => router.push(`/meusreviews/${review.id}`)}
                        onDelete={handleDelete} 
                    />
                </section>
            </div>
           
        </div>
        </main>
    )
}