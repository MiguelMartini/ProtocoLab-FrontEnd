import TicketsCard from "./TicketsCard"

const tickets = [
  {
    id: 1,
    title: "Compra de equipamento",
    author: "Miguel",
    createdAt: "há 1 min",
    priority: "Média",
    status: "Aberto",
    date: "14 de jun. de 2026",
  },
  {
    id: 2,
    title: "Pedido de compra",
    author: "Renato",
    createdAt: "há 24 min",
    priority: "Baixa",
    status: "Fechado",
    date: "09 de jun. de 2026",
  },
  {
    id: 3,
    title: "Teste",
    author: "Carol",
    createdAt: "há 30 min",
    priority: "Alta",
    status: "Progresso",
    date: "14 de jun. de 2026",
  },
];

function TicketFeature() {
  return (
    <div className="max-w-6xl mx-auto pt-8"> 
      <TicketsCard tickets={tickets}/>
    </div>
  )
}

export default TicketFeature