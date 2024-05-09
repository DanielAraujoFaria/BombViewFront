"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){
    await new Promise(r => setTimeout(r, 2000))

    const data = {
        filmes: {
            id: formData.get("filmes")
        },
        tipo: formData.get("tipo"),
        rating: formData.get("rating"),
        comentario: formData.get("comentario")
      }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
    }

    const resp = await fetch(`${process.env.BOMB_API_URL}/meusreviews`, options)

    if (resp.ok){
        redirect("/meusreviews")
      }
    
    if (resp.status == 400){
        return {
            message_comentario: "Validação falhou",
            message_rating: "Validação falhou",
        }
    }

}