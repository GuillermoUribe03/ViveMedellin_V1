import { useState } from "react";
import { useRouter } from "next/router";
import ModalMessage from "./modalMessage";

interface GroupHeaderCardProps {
  imageUrl: string;
  name: string;
  visibility: "publico" | "privado";
  members: number;
  isAdmin?: boolean;
  groupId: string;
}

export default function GroupHeaderCard({
  imageUrl,
  name,
  visibility,
  members,
  isAdmin = false,
  groupId,
}: GroupHeaderCardProps) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleJoinGroup = () => {
    setShowModal(true);
  };

  const handleAccept = () => {
    setShowModal(false);
    router.push(`/grupo/${groupId}`);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Imagen portada */}
      <div className="w-full h-80 rounded-2xl overflow-hidden outline outline-1 outline-slate-300">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Info y botones alineados */}
      <div className="flex flex-col gap-2 px-4">
        <h1 className="text-sky-900 text-4xl font-semibold">{name}</h1>

        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Info grupo */}
          <div className="flex items-center gap-6 text-sky-900 text-2xl">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full border-4 border-sky-900"></div>
              <span>Grupo {visibility === "publico" ? "Público" : "Privado"}</span>
            </div>
            <span>·</span>
            <span>{members} Miembro{members !== 1 && "s"}</span>
          </div>

          {/* Botones */}
          {isAdmin ? (
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-orange-500 text-white text-xl font-semibold rounded-lg shadow hover:bg-orange-400">
                Administrar
              </button>
              <button className="px-6 py-3 bg-orange-500 text-white text-xl font-semibold rounded-lg shadow hover:bg-orange-400">
                Invitar
              </button>
            </div>
          ) : (
            <button
              onClick={handleJoinGroup}
              className="px-6 py-3 bg-orange-500 text-white text-xl font-semibold rounded-lg shadow hover:bg-orange-400"
            >
              Unirte
            </button>
          )}
        </div>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <ModalMessage
          type="success"
          message={`Se ha unido al grupo "${name}" con éxito`}
          onAccept={handleAccept}
        />
      )}
    </div>
  );
}
