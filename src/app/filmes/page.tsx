import TopNavBar from "@/components/TopNavBar"
import SideNavBar from "@/components/SideNavBar"
import Conteudo from "../../components/Conteudo"
import Recomendacoes from "../../components/Recomendacoes"
import Link from "next/link"
import { Button } from "@nextui-org/react"
import { Plus } from "lucide-react"
import { getFilmes } from "../actions/filmes/get"
import { FilmeItem } from "./FilmeItem"

interface Filme {
  id: number,
  nome: string,
  genero: string,
  duracao: string,
  classificacao: number,
  descricao: string
}

export default async function Filmes() {

  const filmes: Filme[] = await getFilmes()

  return (
    <main className="flex min-h-screen flex-col items-center ">
      
      <TopNavBar />

      <div className="flex pt-10 w-full">

        <div className="flex flex-row">
        <SideNavBar />
        </div>
        
        <div className="mx-10 w-full">
        <h2 className="flex justify-start p-5 italic">“Com grandes poderes vêm grandes responsabilidades”</h2>
        <section className="bg-[#0E0D17] rounded-[20px] w-5/6 p-2 m-4">
          <section className="flex grow">
          <h2 className="text-2xl font-semibold pt-6 ps-5 mb-3" >Meus Filmes</h2>
          <Link href="/filmes/new" className="flex p-4 pt-5">
            <Button isIconOnly color="default" size="sm"><Plus /></Button>
          </Link>
          </section>

          <div id="data" className="pl-4 pb-3 mr-4">
            {filmes.map(filme => <FilmeItem filme={filme} />)}
          </div>
          
        </section>
        </div>
      </div>

    </main>

  )
}

