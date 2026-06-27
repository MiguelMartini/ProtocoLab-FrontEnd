import TicketSelect from "./TicketSelect";
import TicketInfo from "./TicketInfo";

function TicketSidebar({ ticket }) {
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
          label="Status"
          value={ticket.status}
          options={statusOptions}
        />

        <TicketSelect
          label="Prioridade"
          value={ticket.priority}
          options={priorityOptions}
        />

        <TicketSelect
          label="Responsável"
          value={ticket.responsible}
          options={[
            { id: 1, nome: ticket.responsible }
          ]}
        />

        <TicketSelect
          label="Departamento"
          value={ticket.department}
          options={[
            { id: 1, nome: ticket.department }
          ]}
        />

      </div>

      <TicketInfo />
    </div>
  );
}

export default TicketSidebar;
