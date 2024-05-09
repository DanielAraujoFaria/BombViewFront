interface Filme {
    id: number,
    nome: string,
    genero: string,
    duracao: string,
    classificacao: number,
    descricao: string
}

interface Review {
    id: number,
    filmes: Filmes,
    tipo: "ASSISTIDO" | "NÃO ASSISTIDO",
    rating: number,
    comentario: string
}
