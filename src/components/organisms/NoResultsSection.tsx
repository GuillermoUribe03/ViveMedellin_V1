// components/organisms/NoResultsSection.tsx
export default function NoResultsSection({ term }: { term: string }) {
  return (
    <div className="p-8 w-full space-y-6 overflow-auto max-h-197">
      <h1 className="text-3xl font-bold text-Blue">Resultados para: {term}</h1>
      <h2 className="text-3xl font-medium text-Blue">¡No se encontraron grupos con el criterio buscado!</h2>
      <div className="w-full h-[1px] bg-slate-300"></div>
    </div>
  );
}
