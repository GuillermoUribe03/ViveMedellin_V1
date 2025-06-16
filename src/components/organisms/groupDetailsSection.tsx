import { useState } from "react";
import { useRouter } from "next/router";
import GroupHeaderCard from "../molecules/groupHeaderCard";
import GroupTabs from "../molecules/groupTabs";
import GroupInfo from "../molecules/groupInfo";
import GroupPublicationSection from "../organisms/groupPublicationSection";
import GroupMembersSection from "../organisms/groupMembersSection";

interface GroupDetailsSectionProps {
  groupId: string;
}

export default function GroupDetailsSection({ groupId }: GroupDetailsSectionProps) {
  const [activeTab, setActiveTab] = useState<"informacion" | "publicaciones" | "miembros">("publicaciones");

  const router = useRouter();

  // ✅ Lee el parámetro "admin" desde la URL
  const isAdmin = router.query.admin === "true";

  return (
    <div className="flex flex-col gap-8">
      <GroupHeaderCard
        imageUrl="https://placehold.co/790x335"
        name={`Grupo #${groupId}`}
        visibility="publico"
        members={150}
        isAdmin={isAdmin}
        groupId={groupId}
      />

      <GroupTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "informacion" && (
        <GroupInfo
          descripcion="Este grupo busca fomentar el aprendizaje de forma colaborativa en temas culturales y artísticos de Medellín."
          tema="Cultura"
        />
      )}

      {activeTab === "publicaciones" && <GroupPublicationSection />}
      {activeTab === "miembros" && <GroupMembersSection />}
    </div>
  );
}