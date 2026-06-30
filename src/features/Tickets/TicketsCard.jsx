import { ArrowRight } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import TicketItem from "./TicketItem";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

function TicketsCard({ title, tickets }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <div className="p-5 flex items-center justify-between border-b border-slate-200">
        <h2 className="font-semibold text-xl">{title}</h2>

        <NavLink
          to="/tickets"
          className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-2xl text-indigo-600 hover:text-indigo-700"
        >
          {t("tickets.ticketsBtn")}
          <ArrowRight size={16} />
        </NavLink>
      </div>

      {tickets.map((ticket) => (
        <TicketItem
          onClick={() => navigate(`/ticket/${ticket.id}`)}
          key={ticket.id}
          {...ticket}
        />
      ))}
    </div>
  );
}

export default TicketsCard;
