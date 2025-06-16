interface GroupTabsProps {
  activeTab: "informacion" | "publicaciones" | "miembros";
  onTabChange?: (tab: "informacion" | "publicaciones" | "miembros") => void;
}

export default function GroupTabs({ activeTab, onTabChange }: GroupTabsProps) {
  const tabs = [
    { id: "informacion", label: "Información" },
    { id: "publicaciones", label: "Publicaciones" },
    { id: "miembros", label: "Miembros" },
  ] as const;

  return (
    <div className="border-b-2 border-slate-300 px-4">
      <div className="flex gap-12 py-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange?.(tab.id)}
            className={`text-2xl font-['Instrument_Sans'] ${
              activeTab === tab.id ? "text-orange-500 font-bold" : "text-orange-500 font-normal"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
