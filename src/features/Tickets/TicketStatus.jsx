function TicketStatus({ status }) {
  const statuses = {
    OPEN: {
      label: "Aberto",
      className: "bg-indigo-100 text-indigo-700",
    },
    IN_PROGRESS: {
      label: "Em andamento",
      className: "bg-yellow-100 text-yellow-700",
    },
    CLOSED: {
      label: "Fechado",
      className: "bg-gray-100 text-gray-700",
    },
  };
  const current = statuses[status] ?? {
    label: status,
    className: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${current.className}`}
    >
      ● {current.label}
    </span>
  );
}

export default TicketStatus;
