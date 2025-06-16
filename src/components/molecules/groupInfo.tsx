interface GroupInfoProps {
  descripcion: string;
  tema: string;
}

export default function GroupInfo({ descripcion, tema }: GroupInfoProps) {
  return (
    <div className="w-full rounded-2xl outline outline-1 outline-slate-300 p-6 bg-white flex flex-col gap-6">
      <div>
        <h2 className="text-sky-900 text-2xl font-semibold mb-2">Descripción</h2>
        <p className="text-sky-900 text-xl">{descripcion}</p>
      </div>

      <div className="flex items-center gap-4">
        <h3 className="text-sky-900 text-xl font-semibold">Tema del Grupo</h3>
        <div className="w-2 h-2 rounded-full bg-sky-900"></div>
        <span className="text-sky-900 text-xl">{tema}</span>
      </div>
    </div>
  );
}
