import { useTranslation } from "react-i18next";
import TicketsCard from "../Tickets/TicketsCard";
import { useEffect, useState } from "react";
import { getTickets } from "@/api/tickets.api";

function TicketComponent() {
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

  const { t } = useTranslation();
  return (
    <div className="max-w-6xl mx-auto pt-8">
      <TicketsCard title={t("dashboard.recentTickets")} tickets={tickets} />
    </div>
  );
}

export default TicketComponent;
