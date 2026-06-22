import TicketFeature from "./TicketComponent";
import DashBoardCard from "./DashBoardCard";

function DashBoardFeature() {
  return (
    <div className="px-20 pt-10 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>

        <div className="mt-2">
          <h2 className="text-2xl text-slate-600">
            Olá, <span className="font-bold text-[#4F39F6]">User</span>
          </h2>

          <p className="text-md text-slate-500 mt-1">
            Acompanhe seus chamados e atividades recentes.
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <DashBoardCard title={"Chamados"} total={13} description={"Total de chamados"}/>
        <DashBoardCard title={"Abertos"} total={3} description={"Chamados abertos"}/>
      </div>
      <TicketFeature />
    </div>
  );
}

export default DashBoardFeature;
