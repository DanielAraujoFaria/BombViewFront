"use server"

export async function getById(id: number){

    const resp = await fetch(`${process.env.BOMB_API_URL}/meusreviews/${id}`, {next: {revalidate: 0}})

    if (!resp.ok){
        throw new Error("Review não encontrada")
    }

    return await resp.json()

}