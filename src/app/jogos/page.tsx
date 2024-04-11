import TopNavBar from "@/app/components/TopNavBar"
import SideNavBar from "@/app/components/SideNavBar"

export default function Jogos() {

  return (
    <main className="flex min-h-screen flex-col items-center ">
      
      <TopNavBar />

      <h2 className="p-5 text-left">“Espaço. Espaço. Eu tô no espaço. ESPAAAAAAAÇO!”</h2>

      <div className="flex flex-row pt-1 ">
        <SideNavBar />
      <section className="bg-[#0E0D17] rounded-[20px] w-5/6 p-2 m-4">
        <h2 className="text-2xl font-semibold pt-6 ps-5" >Jogos</h2>
        <div className="flex flex-row">
          <section className="bg-[#b6b6b6] rounded-[20px] w-64 h-96 p-2 m-4">
          </section>
          <section className="bg-[#b6b6b6] rounded-[20px] w-64 h-96 p-2 m-4">
          </section>
          <section className="bg-[#b6b6b6] rounded-[20px] w-64 h-96 p-2 m-4">
          </section>
          <section className="bg-[#b6b6b6] rounded-[20px] w-64 h-96 p-2 m-4">
          </section>
        </div>
      </section>
      </div>

    </main>

  )
}

