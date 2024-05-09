"use server"

import { redirect } from "next/navigation"

export async function destroy(id: number){

    await new Promise(r => setTimeout(r, 3000))

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(`${process.env.BOMB_API_URL}/meusreviews/${id}`, options)

    if (resp.ok){
        redirect("/meusreviews")
    }
}