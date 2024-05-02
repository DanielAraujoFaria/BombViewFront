"use server"

export async function getById(id: number){

    const resp = await fetch(`${process.env.BOMB_API_URL}/filmes/${id}`, {next: {revalidate: 0}})

    if (!resp.ok){
        throw new Error("Filmes não encontrado")
    }

    return await resp.json()

}