import { useParams } from "react-router-dom";
import { tickets } from "@/mocks/tickets";
import SelectedTicketHeader from "./SelectedTicketHeader";
import TicketComments from "./TicketComments";
import TicketSidebar from "./TicketSidebar";
import VoltarBtn from "@/components/VoltarBtn";

function SelectedTicket() {
  const { id } = useParams();

  const ticket = tickets.find((t) => t.id === Number(id));

  if (!ticket) {
    return <h1>Ticket não encontrado</h1>;
  }

  return (
    <div className="px-20 pt-10 max-w-7xl mx-auto">
      <VoltarBtn route={"/tickets"}/>
      
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
          <TicketSidebar ticket={ticket} />
        </div>
      </div>
    </div>
  );
}

export default SelectedTicket;
