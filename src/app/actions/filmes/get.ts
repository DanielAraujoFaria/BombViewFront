export async function getFilmes() {
    const resp = await fetch(`${process.env.BOMB_API_URL}/filmes`, { next: { revalidate: 0 } })
    return await resp.json()
}