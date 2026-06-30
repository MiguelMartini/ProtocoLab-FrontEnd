import TicketSelect from "./TicketSelect";
import TicketInfo from "./TicketInfo";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getDepartments } from "@/api/department.api";

function TicketSidebar({ ticket }) {
  const { t } = useTranslation();
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    async function loadDepartments() {
      const data = await getDepartments();
      setDepartments(data);
    }

    loadDepartments();
  }, []);
  
  const statusOptions = [
    { id: 1, nome: "Aberto" },
    { id: 2, nome: "Progresso" },
    { id: 3, nome: "Fechado" },
  ];

  const priorityOptions = [
    { id: 1, nome: "Alta" },
    { id: 2, nome: "Média" },
    { id: 3, nome: "Baixa" },
  ];

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <TicketSelect
          label={t("selectedTicket.status")}
          value={ticket.status}
          options={statusOptions}
        />

        <TicketSelect
          label={t("selectedTicket.priority")}
          value={ticket.priority}
          options={priorityOptions}
        />

        <TicketSelect
          label={t("selectedTicket.responsible")}
          value={ticket.responsible}
          options={[{ id: 1, nome: ticket.responsible }]}
        />

        <TicketSelect
          label={t("selectedTicket.department")}
          value={ticket.departmentId}
          options={departments.map((dep) => ({ nome: dep.name }))}
        />
      </div>
      <TicketInfo ticket={ticket} />
    </div>
  );
}

export default TicketSidebar;
