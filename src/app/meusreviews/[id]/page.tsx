import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";
import TopNavBar from "@/components/TopNavBar";
import { getById } from "@/app/actions/filmes/get-by-id";
import { getFilmes } from "@/app/actions/filmes/get";


export default async function EditarReview() {
  const filmes = await getFilmes()

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <TopNavBar/>

      <EditForm filmes={filmes} />

    </main>
  );
}