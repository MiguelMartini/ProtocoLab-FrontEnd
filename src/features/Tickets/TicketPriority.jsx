function TicketPriority({ priority }) {
  const priorities = {
    HIGH: {
      label: "Alta",
      className: "bg-orange-100 text-orange-700",
    },
    NORMAL: {
      label: "Média",
      className: "bg-indigo-100 text-indigo-700",
    },
    LOW: {
      label: "Baixa",
      className: "bg-green-100 text-green-700",
    },
  };

  const current = priorities[priority] ?? {
    label: priority,
    className: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${current.className}`}
    >
      {current.label}
    </span>
  );
}

export default TicketPriority;
