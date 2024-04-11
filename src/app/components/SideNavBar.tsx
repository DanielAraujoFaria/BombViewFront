import Link from "next/link";

export default function SideNavBar() {

    return (
        <nav className="flex flex-col rounded-[20px] items-center px-4 py-2 bg-[#0E0D17] w-64 h-96">
            <ul>
                <li className="flex flex-col space-y-4 pt-10">
                    <Link href="/filmes">Filmes</Link>
                    <Link href="/series">Series</Link>
                    <Link href="/jogos">Jogos</Link> 
                </li>
            </ul>
        </nav>
        
    )
}