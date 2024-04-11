import Link from "next/link";

export default function TopNavBar() {

    return (
        <nav className="flex justify-between items-center px-4 py-2 bg-[#0E0D17] w-full">
            <ul className="text-4xl font-bold">
                <Link href="/">BomBView</Link>
            </ul>
            <section className="bg-[#b6b6b6] rounded-[20px] w-[55rem] h-[2rem]"></section>
            <div className="w-16 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
        </nav>
        
    )
}