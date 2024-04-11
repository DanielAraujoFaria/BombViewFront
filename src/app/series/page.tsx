import TopNavBar from "@/app/components/TopNavBar"
import SideNavBar from "@/app/components/SideNavBar"
import Conteudo from "../components/Conteudo"
import Recomendacoes from "../components/Recomendacoes"

export default function Series() {

  return (
    <main className="flex min-h-screen flex-col items-center ">
      
      <TopNavBar />

      <div className="flex pt-10 w-full">

        <div className="flex flex-row">
        <SideNavBar />
        </div>
        
        <div className="mx-10">
        <h2 className="flex justify-start p-5 italic">“Amigos não mentem”</h2>
        <section className="bg-[#08070c] rounded-[20px] w-5/6 p-2 m-4">
          <h2 className="text-2xl font-semibold pt-6 ps-5" >Series</h2>
          <Conteudo />
          <Recomendacoes />
        </section>
        </div>
      </div>

    </main>

  )
}

