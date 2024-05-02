export default function FilmesBoard() {

    return (
        <nav className="flex justify-start items-center gap-24 py-2 px-8 bg-[#060000] rounded-[20px] w-full">
            <p className="text-[#666666] font-bold">Nome</p>
            <p className="text-[#666666] font-bold">Gênero</p>
            <p className="text-[#666666] font-bold">Classificação</p>
            <p className="text-[#666666] font-bold">Duração</p>
            <p className="text-[#666666] font-bold">Descrição</p>
        </nav>
    )
}