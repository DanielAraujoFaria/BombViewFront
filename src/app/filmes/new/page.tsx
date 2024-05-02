'use client'

import { create } from "@/app/actions/filmes/create";
import TopNavBar from "@/components/TopNavBar"
import { useFormState } from "react-dom"
import Link from "next/link"
import { Button } from "@nextui-org/react"
import { Input } from "@nextui-org/react";
import { SubmitButton } from "@/components/SubmitButton"
import { ArrowLeft} from "lucide-react";

const initialState = {
    messageNome: '',
  }  

export default function Home() {
    const [state, formAction] = useFormState(create, initialState)

  return (
    <main className="flex min-h-screen flex-col items-center ">

      <TopNavBar />
      
      <div className="flex flex-col pt-10 w-4/6">
        
        <div className="mx-10">
        <section className="bg-[#0E0D17] rounded-[20px] w-full p-2 m-4">
            <div className="pt-5 pl-4">
                <Link href="/filmes">
                <Button isIconOnly color="default"><ArrowLeft /></Button>
                </Link>
            </div>
          <h2 className="text-2xl font-semibold pt-6 ps-5 mb-2" >Filmes</h2>
          <form action={formAction} className="flex flex-col gap-3 m-6 rounded-[20px] min-w-[500px]">
            <h2 className="flex justify-start">É Hora do Cadastro!</h2>
            <div class="group flex flex-col w-full group relative justify-end text-white data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]">
                <Input
                key="nome"
                label="Nome"
                name="nome"
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
    
                />
                <Input
                key="genero"
                label="Gênero"
                name="genero"
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
                />
                <Input
                key="duracao"
                label="Duração"
                name="duracao"
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
                />
                <Input
                key="classificacao"
                label="Classificação"
                name="classificacao"
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
                />
                <Input
                key="descricao"
                label="Descrição"
                name="descricao"
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
                />
            </div>
            <div className="flex justify-around mt-4">
                <Link href="/filmes">
                    <SubmitButton />
                </Link>
            </div>
          </form>
        </section>
        </div>
      </div>
      
    </main>

  )
}