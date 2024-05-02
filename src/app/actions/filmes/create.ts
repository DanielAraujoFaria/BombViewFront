"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){
    await new Promise(r => setTimeout(r, 1000))
    
    const data = {
      nome: formData.get("nome"),
      genero: formData.get("genero"),
      duracao: formData.get("duracao"),
      classificacao: formData.get("classificacao"),
      descricao: formData.get("descricao")
    }

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }

    const resp = await fetch(`${process.env.BOMB_API_URL}/filmes`, options)
    
    if (resp.ok){
      redirect("/filmes")
    }

    if (resp.status == 400){
      return {
        messageNome: "Validação falhou"
      }
    }
    
  }
