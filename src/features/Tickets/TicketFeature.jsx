import TicketsCard from "./TicketsCard";
import TicketHeader from "./TicketHeader";
import TicketSearch from "./TicketSearch";
import TicketFilter from "./TicketFilter";
import { tickets } from "@/mocks/tickets";


function TicketFeature() {
  return (
    <div className="px-20 pt-10 max-w-7xl mx-auto">
      <TicketHeader />
      <TicketSearch/>
      <TicketFilter/>
      <TicketsCard title={"Chamados"} tickets={tickets} />
    </div>
  );
}

export default TicketFeature;
