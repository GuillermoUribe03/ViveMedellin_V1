import GroupCard from "../molecules/groupCard";

interface GroupSearchSectionProps {
  searchTerm: string;
}

export default function GroupSearchSection({ searchTerm }: GroupSearchSectionProps) {
  return (
        <div className="p-8 w-full space-y-6 overflow-auto max-h-197">
            
            <h2 className="text-2xl font-bold text-Blue">
                Resultados para: <span className="text-3xl font-bold text-Blue">{searchTerm}</span>
            </h2>
            <GroupCard id={1} variant="search" image="https://media.istockphoto.com/id/1371940128/es/foto/amigos-multirraciales-tomando-selfies-de-grupos-grandes-sonriendo-a-la-cámara-jóvenes-que-se.jpg?s=612x612&w=0&k=20&c=a3RfD8AnfDIG-4mChU3DexLa_spWt4jzQMHUj8CGBtc=" title="Equipo 1" text="Tema: Tema del grupo" text2="594 miembros" button="Unirse"></GroupCard>
            <GroupCard id={2} variant="search" image="https://media.istockphoto.com/id/1371940128/es/foto/amigos-multirraciales-tomando-selfies-de-grupos-grandes-sonriendo-a-la-cámara-jóvenes-que-se.jpg?s=612x612&w=0&k=20&c=a3RfD8AnfDIG-4mChU3DexLa_spWt4jzQMHUj8CGBtc=" title="Equipo 1" text="Tema: Tema del grupo" text2="594 miembros" button="Unirse"></GroupCard>
            <GroupCard id={3} variant="search" image="https://media.istockphoto.com/id/1371940128/es/foto/amigos-multirraciales-tomando-selfies-de-grupos-grandes-sonriendo-a-la-cámara-jóvenes-que-se.jpg?s=612x612&w=0&k=20&c=a3RfD8AnfDIG-4mChU3DexLa_spWt4jzQMHUj8CGBtc=" title="Equipo 1" text="Tema: Tema del grupo" text2="594 miembros" button="Unirse"></GroupCard>
            <GroupCard id={4} variant="search" image="https://media.istockphoto.com/id/1371940128/es/foto/amigos-multirraciales-tomando-selfies-de-grupos-grandes-sonriendo-a-la-cámara-jóvenes-que-se.jpg?s=612x612&w=0&k=20&c=a3RfD8AnfDIG-4mChU3DexLa_spWt4jzQMHUj8CGBtc=" title="Equipo 1" text="Tema: Tema del grupo" text2="594 miembros" button="Unirse"></GroupCard>
            <GroupCard id={5} variant="search" image="https://media.istockphoto.com/id/1371940128/es/foto/amigos-multirraciales-tomando-selfies-de-grupos-grandes-sonriendo-a-la-cámara-jóvenes-que-se.jpg?s=612x612&w=0&k=20&c=a3RfD8AnfDIG-4mChU3DexLa_spWt4jzQMHUj8CGBtc=" title="Equipo 1" text="Tema: Tema del grupo" text2="594 miembros" button="Unirse"></GroupCard>
            <GroupCard id={6} variant="search" image="https://media.istockphoto.com/id/1371940128/es/foto/amigos-multirraciales-tomando-selfies-de-grupos-grandes-sonriendo-a-la-cámara-jóvenes-que-se.jpg?s=612x612&w=0&k=20&c=a3RfD8AnfDIG-4mChU3DexLa_spWt4jzQMHUj8CGBtc=" title="Equipo 1" text="Tema: Tema del grupo" text2="594 miembros" button="Unirse"></GroupCard>
            <GroupCard id={7} variant="search" image="https://media.istockphoto.com/id/1371940128/es/foto/amigos-multirraciales-tomando-selfies-de-grupos-grandes-sonriendo-a-la-cámara-jóvenes-que-se.jpg?s=612x612&w=0&k=20&c=a3RfD8AnfDIG-4mChU3DexLa_spWt4jzQMHUj8CGBtc=" title="Equipo 1" text="Tema: Tema del grupo" text2="594 miembros" button="Unirse"></GroupCard>
            <GroupCard id={8} variant="search" image="https://media.istockphoto.com/id/1371940128/es/foto/amigos-multirraciales-tomando-selfies-de-grupos-grandes-sonriendo-a-la-cámara-jóvenes-que-se.jpg?s=612x612&w=0&k=20&c=a3RfD8AnfDIG-4mChU3DexLa_spWt4jzQMHUj8CGBtc=" title="Equipo 1" text="Tema: Tema del grupo" text2="594 miembros" button="Unirse"></GroupCard>
            <GroupCard id={9} variant="search" image="https://media.istockphoto.com/id/1371940128/es/foto/amigos-multirraciales-tomando-selfies-de-grupos-grandes-sonriendo-a-la-cámara-jóvenes-que-se.jpg?s=612x612&w=0&k=20&c=a3RfD8AnfDIG-4mChU3DexLa_spWt4jzQMHUj8CGBtc=" title="Equipo 1" text="Tema: Tema del grupo" text2="594 miembros" button="Unirse"></GroupCard>
            <GroupCard id={10} variant="search" image="https://media.istockphoto.com/id/1371940128/es/foto/amigos-multirraciales-tomando-selfies-de-grupos-grandes-sonriendo-a-la-cámara-jóvenes-que-se.jpg?s=612x612&w=0&k=20&c=a3RfD8AnfDIG-4mChU3DexLa_spWt4jzQMHUj8CGBtc=" title="Equipo 1" text="Tema: Tema del grupo" text2="594 miembros" button="Unirse"></GroupCard>
        </div>
    )
}