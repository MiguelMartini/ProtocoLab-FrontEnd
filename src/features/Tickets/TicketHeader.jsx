import NewTicketBtn from "@/components/NewTicketBtn";

function TicketHeader() {
  return (
    <div className="mb-8 flex flex-row justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-900">Chamados</h1>
        <p className="text-xl text-slate-600">
          Todos os chamados da sua organização.
        </p>
      </div>
      <div className="w-3xs">
        <NewTicketBtn />
      </div>
    </div>
  );
}

export default TicketHeader;
