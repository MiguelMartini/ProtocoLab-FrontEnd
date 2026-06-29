import { Pencil } from "lucide-react"

function DepartmentItem({ department, onClick }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 hover:bg-gray-100 cursor-pointer" onClick={onClick}>
      <div>
        <h3>{department.name}</h3>
        <p>{department.description}</p>
      </div>

      <button className="cursor-pointer">
        <Pencil size={18} />
      </button>
    </div>
  )
}

export default DepartmentItem