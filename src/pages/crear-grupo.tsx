import { useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/molecules/header";
import CreateGroupForm from "@/components/organisms/createGroupForm";
import GroupPreview from "@/components/organisms/groupPreview";

export default function CrearGrupoPage() {
  const [groupData, setGroupData] = useState({
    name: "",
    description: "",
    theme: "",
    privacy: "publico" as "publico" | "privado",
    rules: ""
  });

  const [modal, setModal] = useState<null | { type: "success" | "error"; message: string }>(null);
  const [createdGroupId, setCreatedGroupId] = useState<string | null>(null); // 🆕
  const router = useRouter(); // 🆕

  const handleCreateGroup = () => {
    const { name, description, theme, rules } = groupData;

    if (!name || !description || !theme || !rules) {
      setModal({
        type: "error",
        message: "Por favor completa todos los campos para crear el grupo."
      });
      return;
    }

    // Generar ID simulado (slug con timestamp) 🆕
    const fakeId = `${name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`;
    setCreatedGroupId(fakeId);

    setModal({
      type: "success",
      message: `Se ha creado el grupo "${name}" con éxito`
    });
  };

  return (
    <div className="bg-white h-screen flex flex-col">
      <Header />

      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-xl space-y-4 w-[400px] text-center">
            <p className={`text-2xl font-bold ${modal.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {modal.message}
            </p>
            <button
              onClick={() => {
                if (modal.type === "success" && createdGroupId) {
                  router.push(`/grupo/${createdGroupId}?admin=true`);
                } else {
                  setModal(null);
                }
              }}
              className="bg-orange-500 text-white px-6 py-2 rounded text-xl"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-grow">
        {/* Sección izquierda: Formulario */}
        <div className="w-[35%] overflow-y-auto p-6 border-r-2 border-altGray">
          <CreateGroupForm onUpdate={setGroupData} onCreate={handleCreateGroup} />
        </div>

        {/* Sección derecha: Vista previa */}
        <div className="w-[65%] overflow-y-auto p-6">
          <GroupPreview
            name={groupData.name}
            description={groupData.description}
            theme={groupData.theme}
            privacy={groupData.privacy}
          />
        </div>
      </div>
    </div>
  );
}
