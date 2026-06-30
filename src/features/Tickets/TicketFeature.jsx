import TicketsCard from "./TicketsCard";
import TicketHeader from "./TicketHeader";
import TicketSearch from "./TicketSearch";
import TicketFilter from "./TicketFilter";
// import { tickets } from "@/mocks/tickets";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getTickets } from "@/api/tickets.api";

function TicketFeature() {
  const { t } = useTranslation();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    async function loadTickets() {
      try {
        const data = await getTickets();
        setTickets(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadTickets();
  }, []);

  return (
    <div className="px-20 pt-10 max-w-7xl mx-auto">
      <TicketHeader />
      <TicketSearch />
      <TicketFilter />
      <TicketsCard title={t("tickets.sidebar")} tickets={tickets} />
    </div>
  );
}

export default TicketFeature;
