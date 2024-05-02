import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";
import TopNavBar from "@/components/TopNavBar";
import { getById } from "@/app/actions/filmes/get-by-id";


export default async function EditarFilme({params}: Params) {
  const { id } = params

  const filme: Filme = await getById(id)

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <TopNavBar/>

      <EditForm {...filme} />

    </main>
  );
}