import TopNavBar from "@/components/TopNavBar"
import SideNavBar from "@/components/SideNavBar"
import Conteudo from "../../components/Conteudo"
import Recomendacoes from "../../components/Recomendacoes"
import Link from "next/link"
import { Button } from "@nextui-org/react"
import { Plus } from "lucide-react"
import { getReviews } from "../actions/meusreviews/get"
import { ReviewItem } from "./ReviewItem"
import ReviewsBoard from "@/components/ReviewsBoard"

export default async function Reviews() {

  const reviews: any = await getReviews()

  return (
    <main className="flex min-h-screen flex-col items-center ">
      
      <TopNavBar />

      <div className="flex pt-10 w-full">

        <div className="flex flex-row">
        <SideNavBar />
        </div>
        
        <div className="mx-10">
        <h2 className="flex justify-start p-5 italic">Aqui estão os seus reviews!</h2>
        <section className="flex flex-row bg-[#0E0D17] rounded-[20px] w-full p-2 m-4">
          <h2 className="text-2xl font-semibold pt-6 ps-5" >Reviews</h2>
          <Link href="/meusreviews/new" className="flex p-4 pt-5">
            <Button isIconOnly color="default" size="sm"><Plus /></Button>
          </Link>
         <ReviewsBoard
              reviews={reviews.content} 
          />
        </section>


        </div>
      </div>

    </main>

  )
}