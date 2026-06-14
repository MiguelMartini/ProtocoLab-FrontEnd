function TicketStatus({ status }) {
  const styles = {
    Aberto: "bg-indigo-100 text-indigo-700",
    Fechado: "bg-gray-100 text-gray-700",
    Progresso: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        styles[status]
      }`}
    >
      ● {status}
    </span>
  );
}

export default TicketStatus;