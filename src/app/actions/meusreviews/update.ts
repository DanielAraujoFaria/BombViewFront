"use server"

import { redirect } from "next/navigation"

export async function update(prevState: any, formData: FormData){
    await new Promise(r => setTimeout(r, 1000))

    const id = formData.get("id")

    const data = {
        filmes: {
            id: formData.get("filmes")
        },
        tipo: formData.get("tipo"),
        rating: formData.get("rating"),
        comentario: formData.get("comentario")
      }
      
    const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
    }

    const resp = await fetch(`${process.env.BOMB_API_URL}/meusreviews/${id}`, options)

    if (resp.ok){
        redirect("/meusreviews")
    }

    if (resp.status == 400){
        return {
          messageNome: "Validação falhou"
        }
    }

    if (resp.status == 404){
        return {
          messageNome: "Review não encontrada"
        }
    }
}