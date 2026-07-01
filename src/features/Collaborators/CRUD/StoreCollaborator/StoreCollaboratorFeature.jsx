import { PencilRuler, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import Select from "../../Components/Select";

import { gerarSenha } from "../../../../utils/generatePassword";
import { useTranslation } from "react-i18next";
import { getDepartments } from "@/api/department.api";
import { createCollaborator } from "@/api/collaborator.api";

function StoreCollaboratorFeature() {
  const { t } = useTranslation();
  const [departments, setDepartments] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    departmentId: "",
  });

  useEffect(() => {
    async function loadDepartments() {
      try {
        const data = await getDepartments();
        setDepartments(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadDepartments();
  }, []);

  const handleCreate = async () => {
    try {
      await createCollaborator(form);

      alert("Colaborador criado!");

      setForm({
        name: "",
        email: "",
        password: "",
        role: "",
        departmentId: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white  p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">
        {t("collaborator.newHeader")}
      </h2>

      <div className="space-y-4">
        <div className="flex flex-col gap-3 mt-10">
          <div className="flex flex-col gap-3 md:flex-col mb-2">
            <span className="text-md text-gray-500">
              {t("collaborator.newName")}
            </span>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t("collaborator.newNamePh")}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:bg-white"
            />
            <span className="text-md text-gray-500">
              {t("collaborator.newEmail")}
            </span>
            <input
              type="text"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={t("collaborator.newEmailPh")}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:bg-white"
            />
            <div className="flex flex-col">
              <span className="text-md text-gray-500">
                {t("collaborator.generatePass")}
              </span>
              <div className="flex gap-4">
                <input
                  value={form.password}
                  readOnly
                  type="text"
                  placeholder={t("collaborator.generatePassPh")}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:bg-white"
                />

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 md:w-fit cursor-pointer"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      password: gerarSenha(),
                    }))
                  }
                >
                  <PencilRuler size={18} />
                  {t("collaborator.generatePassBtn")}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col">
                <label className="mb-2 text-md font-medium text-gray-500">
                  {t("collaborator.role")}
                </label>

                <input
                  type="text"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  placeholder={t("collaborator.rolePlaceholder")}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>

              <Select
                label={t("collaborator.departmentSel")}
                value={form.departmentId}
                onChange={(e) =>
                  setForm({
                    ...form,
                    departmentId: Number(e.target.value),
                  })
                }
                options={departments.map((dep) => ({
                  id: dep.id,
                  nome: dep.name,
                }))}
              />
            </div>
          </div>

          <button
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 md:w-fit cursor-pointer"
            onClick={handleCreate}
          >
            <Plus size={18} />
            {t("collaborator.addBtn")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StoreCollaboratorFeature;
