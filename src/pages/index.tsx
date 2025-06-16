import LogoVM from "../components/atoms/logoVM";
import Button from "@/components/atoms/button";
import { useRouter } from "next/router";

export default function Home () {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-12 h-screen justify-center items-center">
      <div className="flex flex-row items-center gap-6">
          <LogoVM className="h-24 w-auto" />
          <h1 className="text-9xl text-Orange font-bold">ViveMedellín</h1>
      </div>
      <Button text="Ingresar a la plataforma" icon="material-symbols:groups" color="blue" className="text-5xl gap-8" widthIcon="96" onClick={() => router.push('/login')}></Button>
    </div>
  )
}