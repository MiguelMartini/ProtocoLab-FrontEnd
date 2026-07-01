import TicketFeature from "./TicketComponent";
import TicketChart from "./TicketChart";
import DashBoardCard from "./DashBoardCard";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/hooks/useAuth";
import {
  ticketStatusData,
  ticketPriorityData,
  ticketDepartmentData,
  ticketMonthlyData,
} from "@/mocks/ticketChart";

//Para fazer a navegação do gráfico de barra.
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTickets } from "@/api/tickets.api";

function DashBoardFeature() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [ticketCount, setTicketCount] = useState(0);

  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    closed: 0,
  });

  useEffect(() => {
    async function loadTickets() {
      try {
        const tickets = await getTickets();

        setStats({
          total: tickets.length,
          open: tickets.filter((ticket) => ticket.status === "OPEN").length,
          inProgress: tickets.filter(
            (ticket) => ticket.status === "IN_PROGRESS",
          ).length,
          closed: tickets.filter((ticket) => ticket.status === "CLOSED").length,
        });
      } catch (error) {
        console.error(error);
      }
    }

    loadTickets();
  }, []);
  useEffect(() => {
    async function loadTickets() {
      try {
        const tickets = await getTickets();

        setTicketCount(tickets.length);
      } catch (error) {
        console.error("Erro ao buscar tickets:", error);
      }
    }

    loadTickets();
  }, []);

  const navigate = useNavigate();

  const handleSliceClick = (entry) => {
    console.log(entry);

    // Exemplo de redirect
    navigate(`/tickets?priority=${entry.priority}`);
  };

  return (
    <div className="px-8 pt-10 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          {t("dashboard.title")}
        </h1>

        <div className="mt-2">
          <h2 className="text-2xl text-slate-600">
            {t("dashboard.greeting")}{" "}
            <span className="font-bold text-[#4F39F6]">{user?.name}</span>
          </h2>

          <p className="text-md text-slate-500 mt-1">
            {t("dashboard.subtitle")}
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <DashBoardCard
          title={t("dashboard.cards.tickets.title")}
          total={stats.total}
          description={t("dashboard.cards.tickets.description")}
        />

        <DashBoardCard
          title={t("dashboard.cards.open.title")}
          total={stats.open}
          description={t("dashboard.cards.open.description")}
        />

        <DashBoardCard
          title={t("dashboard.cards.progress.title")}
          total={stats.inProgress}
          description={t("dashboard.cards.progress.description")}
        />

        <DashBoardCard
          title={t("dashboard.cards.closed.title")}
          total={stats.closed}
          description={t("dashboard.cards.closed.description")}
        />
      </div>

      <div className="mt-8 space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <TicketChart title="Chamados por status" data={ticketStatusData} />
          <TicketChart
            title="Chamados por prioridade"
            data={ticketPriorityData}
            onSliceClick={handleSliceClick}
          />
        </div>

        {/* <TicketChart
          title="Chamados por departamento"
          data={ticketDepartmentData}
          type="bar"
        />

        <TicketChart
          title="Chamados por mês"
          data={ticketMonthlyData}
          type="bar"
        /> */}
      </div>

      <TicketFeature />
    </div>
  );
}

export default DashBoardFeature;
