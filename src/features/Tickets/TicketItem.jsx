import TicketPriority from "./TicketPriority";
import TicketStatus from "./TicketStatus";
import { formatDate } from "@/utils/formatDate";

function TicketItem({ ticket, onClick}) {
  console.log({...ticket})
  return (
     <div className="flex items-center justify-between p-5 border-b border-slate-200 cursor-pointer hover:bg-gray-100 " onClick={onClick}>
      <div>
        <h3 className="font-medium text-lg">
          {ticket.title}
        </h3>

        <p className="text-slate-500 text-sm">
          {ticket.owner.name}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <TicketPriority priority={ticket.priority} />

        <TicketStatus status={ticket.status} />

        <span className="text-slate-500 text-sm text-right w-28">
          {formatDate(ticket.opening)}
        </span>
      </div>
    </div>
  );
}

export default TicketItem;
