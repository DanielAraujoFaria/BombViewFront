"use server"

export async function getReviews() {
    const resp = await fetch(`${process.env.BOMB_API_URL}/meusreviews`, { next: { revalidate: 0 } })
    return await resp.json()
}