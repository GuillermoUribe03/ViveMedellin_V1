interface GroupPreviewProps {
  name: string;
  description: string;
  theme: string;
  privacy: "publico" | "privado";
  rules?: string;
}

export default function GroupPreview({
  name,
  description,
  theme,
  privacy,
  rules = "",
}: GroupPreviewProps) {
  const parsedRules = rules
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");

  return (
    <div className="space-y-6 rounded-2xl border border-slate-300 p-6 shadow">
      {/* Imagen */}
      <div className="h-80 bg-slate-200 rounded-xl overflow-hidden">
        <img
          src="https://placehold.co/790x335"
          alt="Vista previa"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Encabezado */}
      <div>
        <h2 className="text-4xl font-bold text-sky-900">{name || "Nombre del Grupo"}</h2>
        <div className="flex gap-4 mt-2 text-2xl text-sky-900">
          <span>{privacy === "publico" ? "Grupo Público" : "Grupo Privado"}</span>
          <span>•</span>
          <span>1 Miembro</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-b border-slate-300 py-4">
        <div className="flex gap-12 text-orange-500 text-2xl">
          <span>Información</span>
          <span>Publicaciones</span>
          <span>Miembros</span>
        </div>
      </div>

      {/* Contenido */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-sky-900">Descripción</h3>
        <p className="text-xl text-sky-900">{description || "Texto descripción del grupo"}</p>

        <div className="flex gap-2 items-center text-xl text-sky-900">
          <span className="font-semibold">Tema del grupo:</span>
          <span>{theme || "Tema no definido"}</span>
        </div>

        {parsedRules.length > 0 && (
          <div className="mt-4">
            <h4 className="text-2xl font-semibold text-sky-900">Reglas</h4>
            <ul className="list-disc ml-6 space-y-1 text-xl text-sky-900">
              {parsedRules.map((regla, idx) => (
                <li key={idx}>Regla {idx + 1} - {regla}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}