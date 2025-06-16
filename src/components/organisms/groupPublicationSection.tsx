import PublicationCard from "./publicationCard";

export default function GroupPublicationSection() {
  return (
    <div className="flex flex-col gap-10">
      <PublicationCard
        idGrupo={1}
        groupImage="https://www.grupoanalisis.com/wp-content/uploads/2020/03/grupo-ayuda-artmemori.jpg"
        groupName="Manos a la obra"
        author_date="Santiago - Fecha"
        textPublication={
          <>
            Publicación de texto -- Línea 1 <br />
            Línea 2 <br />
            Línea 3
          </>
        }
        commentAuthor="Valentina"
        comment="Comentario -- Linea 1 Linea 2"
      />

      {/* Duplicamos solo para simular múltiples publicaciones */}
      <PublicationCard
        idGrupo={1}
        groupImage="https://www.grupoanalisis.com/wp-content/uploads/2020/03/grupo-ayuda-artmemori.jpg"
        groupName="Manos a la obra"
        author_date="Santiago - Fecha"
        textPublication={
          <>
            Publicación de texto -- Línea 1 <br />
            Línea 2 <br />
            Línea 3
          </>
        }
        commentAuthor="Valentina"
        comment="Comentario -- Linea 1 Linea 2"
      />
    </div>
  );
}
