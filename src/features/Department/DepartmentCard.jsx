import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

function DepartmentCard() {
   const [departments, setDepartments] = useState([
    {
      name: "TI",
      description: "Tecnologia da Informação",
    },
  ]);

  const [newDepartment, setNewDepartment] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function handleAddDepartment() {
    if (!newDepartment.trim() || !newDescription.trim()) return;

    setDepartments([
      ...departments,
      {
        name: newDepartment,
        description: newDescription,
      },
    ]);

    setNewDepartment("");
    setNewDescription("");
  }

  function handleRemoveDepartment(index) {
    setDepartments(departments.filter((_, i) => i !== index));
  }
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white  p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">
        Departamentos
      </h2>

      <div className="space-y-4">
        {departments.map((department, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3"
          >
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">
                {department.name}
              </span>

              <span className="text-sm text-gray-500">
                {department.description}
              </span>
            </div>

            <button
              onClick={() => handleRemoveDepartment(index)}
              className="cursor-pointer text-gray-400 transition hover:text-red-500"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}

        <div className="flex flex-col gap-3 mt-10">
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              value={newDepartment}
              onChange={(e) => setNewDepartment(e.target.value)}
              placeholder="Nome do departamento"
              className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-600"
            />

            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Descrição do departamento"
              className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-600"
            />
          </div>

          <button
            onClick={handleAddDepartment}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 md:w-fit cursor-pointer"
          >
            <Plus size={18} />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DepartmentCard;
