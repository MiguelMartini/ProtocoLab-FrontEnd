import { ArrowLeftIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function VoltarBtn({route}) {
  return (
    <div>
        <NavLink
        to={route}
        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all duration-200 hover:text-gray-700 mb-5"
      >
        <ArrowLeftIcon size={18} />
        <span className="font-medium">Voltar</span>
      </NavLink>
    </div>
  )
}

export default VoltarBtn