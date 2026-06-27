import { NavLink, useParams } from "react-router-dom";
import { tickets } from "@/mocks/tickets";
import SelectedTicketHeader from "./SelectedTicketHeader";
import TicketComments from "./TicketComments";
import TicketSidebar from "./TicketSidebar";
import { ArrowLeftIcon } from "lucide-react";

function SelectedTicket() {
  const { id } = useParams();

  const ticket = tickets.find((t) => t.id === Number(id));

  if (!ticket) {
    return <h1>Ticket não encontrado</h1>;
  }
  return (
    <div className="px-20 pt-10 max-w-7xl mx-auto">
      <NavLink
        to="/tickets"
        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all duration-200 hover:text-gray-700 mb-5"
      >
        <ArrowLeftIcon size={18} />
        <span className="font-medium">Voltar</span>
      </NavLink>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 space-y-6">
          <SelectedTicketHeader
            title={ticket.title}
            description={ticket.description}
            status={ticket.status}
          />
          <TicketComments />
        </div>
        <div className="col-span-4">
          <TicketSidebar />
        </div>
      </div>
    </div>
  );
}

export default SelectedTicket;
