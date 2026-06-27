import TicketSelect from './TicketSelect'
import TicketInfo from './TicketInfo'

function TicketSidebar() {
    const prioridades = [
  { id: 1, nome: "Alta" },
  { id: 2, nome: "Média" },
  { id: 3, nome: "Baixa" },
];
  return (
    <div className="space-y-5">

            <div className="rounded-2xl border bg-white p-5 shadow-sm">

                <TicketSelect
                    label="Status"
                    value="Resolvido"
                />

                <TicketSelect
                    label="Prioridade"
                    value={"Alta"}
                    options={prioridades}
                />

                <TicketSelect
                    label="Responsável"
                    value="Miguel"
                />

                <TicketSelect
                    label="Departamento"
                    value="Sem departamento"
                />

            </div>

            <TicketInfo/>

        </div>
  )
}

export default TicketSidebar