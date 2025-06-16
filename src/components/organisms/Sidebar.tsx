import { useRouter } from "next/router";
import Scrollbar from "../molecules/scrollbar";
import Button from "../atoms/button";
import SearchBar from "../atoms/searchBar";

interface SidebarProps {
    onSearch: (term: string) => void;
}

export default function Sidebar ({ onSearch }: SidebarProps) {
    
    const router = useRouter();

    return (
        <div className="w-full space-y-4 border-r-2 border-Gray ml-4 pr-2 pt-2">
            <h1 className="text-3xl text-Blue font-bold">Grupos y comunidades</h1>
            <SearchBar text="Buscar Grupos" icon="tabler:search" onSearch={onSearch} />
            <Button text="Últimas publicaciones" icon="mdi:newspaper-variant-multiple-outline" iconPosition="left" widthIcon="50" color="emerald" className="w-full text-xl space-x-4 justify-start p-4"></Button>
            <Button text="Sugerencias de comunidades" icon="mdi:lightbulb-on-outline" iconPosition="left" widthIcon="50" color="gray" className="w-full text-xl space-x-4 justify-start p-4"></Button>
            <Button text="+ Crear nuevo grupo" color="orange" className="w-full text-2xl p-2" onClick={() => router.push("/crear-grupo")} ></Button>
            <Scrollbar></Scrollbar>
        </div>
    )
}