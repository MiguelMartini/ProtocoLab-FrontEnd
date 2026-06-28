import { PencilRuler, Plus } from "lucide-react";
import { useState } from "react";
import Select from "../Components/Select";

import { gerarSenha } from "../../../../utils/generatePassword";

function StoreCollaboratorFeature() {
  const [password, setPassword] = useState("");
  
  const statusOptions = [
    { id: 1, nome: "TI" },
    { id: 2, nome: "Compras" },
    { id: 3, nome: "Gerencia" },
  ];

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white  p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">
        Novo Colaborador
      </h2>

      <div className="space-y-4">
        <div className="flex flex-col gap-3 mt-10">
          <div className="flex flex-col gap-3 md:flex-col mb-2">
            <span className="text-md text-gray-500">Nome:</span>
            <input
              type="text"
              placeholder="Nome do colaborador"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:bg-white"
            />
            <span className="text-md text-gray-500">E-mail:</span>
            <input
              type="text"
              placeholder="Email colaborador"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:bg-white"
            />
            <div className="flex flex-col">
              <span className="text-md text-gray-500">Gerar senha:</span>
              <div className="flex gap-4">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  readOnly
                  type="text"
                  placeholder="Gerar senha"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:bg-white"
                />
                <button
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 md:w-fit cursor-pointer"
                  onClick={() => setPassword(gerarSenha())}
                >
                  <PencilRuler size={18} />
                  Gerar
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col">
                <label className="mb-2 text-md font-medium text-gray-500">
                  Cargo
                </label>

                <input
                  type="text"
                  placeholder="Digite o cargo"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>

              <Select
                label="Selecionar Departamento"
                value="Selecionar Departamento"
                options={statusOptions}
              />
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 md:w-fit cursor-pointer">
            <Plus size={18} />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}

export default StoreCollaboratorFeature;
