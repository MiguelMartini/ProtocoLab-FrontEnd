import { Plus } from 'lucide-react'

function DepartmentForm({
  newDepartment,
  newDescription,
  setNewDepartment,
  setNewDescription,
  onAdd,
}) {
  return (
    <div className="mt-10 flex flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              value={newDepartment}
              onChange={(e) => setNewDepartment(e.target.value)}
              placeholder="Nome do departamento"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
            />

            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Descrição do departamento"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
            />
          </div>

          <button
            onClick={onAdd}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 md:w-fit"
          >
            <Plus size={18} />
            Adicionar
          </button>
        </div>
  )
}

export default DepartmentForm