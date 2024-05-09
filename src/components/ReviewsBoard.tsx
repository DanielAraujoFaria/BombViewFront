interface ReviewDataProps {
    reviews: Array<Review>,
}


export default function ReviewsBoard({ reviews }: ReviewDataProps) {

    return (
        <nav className="flex justify-start items-center gap-24 py-2 px-8 bg-[#060000] rounded-[20px] w-full">
            <p className="text-[#666666] font-bold">Filmes</p>
            <p className="text-[#666666] font-bold">Tipo</p>
            <p className="text-[#666666] font-bold">Rating</p>
            <p className="text-[#666666] font-bold">Comentário</p>
        </nav>
    )
}