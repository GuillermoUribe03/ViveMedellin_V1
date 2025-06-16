// src/components/organisms/createGroupForm.tsx

import { useState } from "react";

interface CreateGroupFormProps {
  onUpdate: (data: {
    name: string;
    description: string;
    theme: string;
    privacy: "publico" | "privado";
    rules: string;
  }) => void;
  onCreate: () => void; // <- nueva prop para ejecutar el botón
}

export default function CreateGroupForm({ onUpdate, onCreate }: CreateGroupFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [theme, setTheme] = useState("");
  const [privacy, setPrivacy] = useState<"publico" | "privado">("publico");
  const [rules, setRules] = useState("");

  const handleUpdate = () => {
    onUpdate({ name, description, theme, privacy, rules });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-Blue">Crear Grupo</h2>

      <div className="space-y-2">
        <label className="text-xl text-sky-900">Nombre del grupo</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleUpdate}
          className="w-full border border-slate-300 p-2 rounded-md"
        />
      </div>

      {/* Descripción */}
      <div className="space-y-2">
        <label className="text-xl text-sky-900">Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onBlur={handleUpdate}
          className="w-full border border-slate-300 p-2 rounded-md"
          maxLength={255}
        />
        <p className="text-sm text-stone-500">{description.length}/255 Caracteres</p>
      </div>

      <div className="space-y-2">
        <label className="text-xl text-sky-900">Tema</label>
        <select
          value={theme}
          onChange={(e) => {
            setTheme(e.target.value);
            handleUpdate();
          }}
          className="w-full border border-slate-300 p-2 rounded-md"
        >
          <option value="">Selecciona un tema</option>
          <option value="arte">Arte</option>
          <option value="historia">Historia</option>
          <option value="música">Música</option>
          <option value="literatura">Literatura</option>
          <option value="tecnología">Tecnología</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xl text-sky-900">Privacidad</label>
        <div className="flex gap-6">
          <label>
            <input
              type="radio"
              value="publico"
              checked={privacy === "publico"}
              onChange={() => {
                setPrivacy("publico");
                handleUpdate();
              }}
              className="mr-2"
            />
            Público
          </label>
          <label>
            <input
              type="radio"
              value="privado"
              checked={privacy === "privado"}
              onChange={() => {
                setPrivacy("privado");
                handleUpdate();
              }}
              className="mr-2"
            />
            Privado
          </label>
        </div>
      </div>

      {/* Reglas */}
      <div className="space-y-2">
        <label className="text-xl text-sky-900">Reglas (una por línea)</label>
        <textarea
          value={rules}
          onChange={(e) => setRules(e.target.value)}
          onBlur={handleUpdate}
          className="w-full border border-slate-300 p-2 rounded-md"
          placeholder="Regla 1 -&#10;Regla 2 -&#10;Regla 3 -"
        />
      </div>

      <button
        onClick={onCreate}
        className="bg-orange-500 text-white px-6 py-2 rounded-md text-xl"
      >
        Crear grupo
      </button>
    </div>
  );
}
