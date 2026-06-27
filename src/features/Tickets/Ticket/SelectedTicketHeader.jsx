import { Pencil } from "lucide-react"
import TicketStatus from "../TicketStatus"

function SelectedTicketHeader({ title, description, status}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
         <div className="flex justify-between">

                <div className="flex gap-2">
                    <TicketStatus status={status} />
                    {/* <PriorityBadge priority="Alta" /> */}
                </div>

                <button className="flex items-center gap-2 hover:text-indigo-600">
                    <Pencil size={18}/>
                    Editar
                </button>

            </div>

            <h1 className="mt-6 text-4xl font-bold">
                {title}
            </h1>

            <p className="mt-4 text-gray-600">
                {description}
            </p>
    </div>
  )
}

export default SelectedTicketHeader