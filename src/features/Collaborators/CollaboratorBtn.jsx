import { Plus } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function CollaboratorBtn() {
  return (
    <div className="p-4">
      <NavLink to={"/collaborators/store"} className="w-full bg-indigo-600 text-white rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-indigo-700 cursor-pointer">
        <Plus size={18} />
        Novo colaborador
      </NavLink>
    </div>
  )
}

export default CollaboratorBtn