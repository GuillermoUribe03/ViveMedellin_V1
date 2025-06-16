import LogoVM from "../atoms/logoVM";
import Button from "../atoms/button";
import { useRouter } from "next/router";

export default function Header () {
    const router = useRouter();

    return (
        <div className="flex flex-row justify-center items-center h-full py-3 gap-8 relative border-b-2 border-Gray">
            <LogoVM />
            <Button icon="mdi:home-outline" color="orangeIcon" widthIcon="55"></Button>
            <Button icon="mdi:calendar-month-outline" color="orangeIcon" widthIcon="55"></Button>
            <Button icon="mdi:map-outline" color="orangeIcon" widthIcon="55"></Button>
            <Button 
                icon="material-symbols:groups" 
                color="emeraldIcon" 
                widthIcon="55"   
                onClick={() => {
                    if (router.pathname === "/busquedaGrupos") {
                        router.reload(); // 👈 fuerza recarga para resetear el estado
                    } else {
                        router.push("/busquedaGrupos");
                    }
                }}>  
            </Button>
            <Button icon="mdi:bell-outline" color="orangeIcon" widthIcon="55"></Button>
            <div className="flex flex-row items-center gap-4 absolute right-8">
                <h1 className="text-2xl text-Blue font-semibold">Username</h1>
                <Button icon="mdi:person-outline" iconPosition="right" color="roundedEmerald" widthIcon="65"></Button>
            </div>

        </div>
    )
}