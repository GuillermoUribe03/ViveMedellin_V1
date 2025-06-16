import PublicationCard from "./publicationCard";

export default function PublicationSection () {
    return (
        <div className="flex flex-col w-full justify-center gap-10 items-center bg-white overflow-auto">
            
            <h2 className="text-3xl font-bold text-Blue w-full text-left px-4">
                Lo más reciente de tus comunidades
            </h2>    
                    
            <PublicationCard 
            idGrupo={1}
            groupImage="https://www.grupoanalisis.com/wp-content/uploads/2020/03/grupo-ayuda-artmemori.jpg"
            groupName="Manos a la obra"
            author_date="Santiago - Fecha"
            textPublication={<>Publicación de texto -- Línea 1 <br />Línea 2 <br /> Línea 3</>}
            commentAuthor="Valentina"
            comment="Comentario -- Linea 1 Linea 2"
            >
            </PublicationCard>
            <PublicationCard 
            idGrupo={1}
            groupImage="https://www.grupoanalisis.com/wp-content/uploads/2020/03/grupo-ayuda-artmemori.jpg"
            groupName="Manos a la obra"
            author_date="Santiago - Fecha"
            textPublication={<>Publicación de texto -- Línea 1 <br />Línea 2 <br /> Línea 3</>}
            commentAuthor="Valentina"
            comment="Comentario -- Linea 1 Linea 2"
            >
            </PublicationCard>
            <PublicationCard 
            idGrupo={1}
            groupImage="https://www.grupoanalisis.com/wp-content/uploads/2020/03/grupo-ayuda-artmemori.jpg"
            groupName="Manos a la obra"
            author_date="Santiago - Fecha"
            textPublication={<>Publicación de texto -- Línea 1 <br />Línea 2 <br /> Línea 3</>}
            commentAuthor="Valentina"
            comment="Comentario -- Linea 1 Linea 2 Comentario -- Linea 1 Linea 2Comentario -- Linea 1 Linea 2Comentario -- Linea 1 Linea 2Comentario -- Linea 1 Linea 2Comentario -- Linea 1 Linea 2"
            >
            </PublicationCard>
        </div>
    )
}