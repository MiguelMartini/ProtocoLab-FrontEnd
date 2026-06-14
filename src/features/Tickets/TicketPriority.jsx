function TicketPriority({ priority }) {
  const styles = {
    Alta: "bg-orange-100 text-orange-700",
    Média: "bg-indigo-100 text-indigo-700",
    Baixa: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        styles[priority]
      }`}
    >
      {priority}
    </span>
  );
}

export default TicketPriority;