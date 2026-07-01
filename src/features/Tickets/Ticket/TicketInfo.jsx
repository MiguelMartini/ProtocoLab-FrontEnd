import { formatDate } from '@/utils/formatDate';
import { Calendar, CheckCircle2, UserCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next';

function TicketInfo({ticket}) {
    const { t } = useTranslation();
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm space-y-5">

            <div className="flex items-center gap-3">
                <UserCircle2/>
                <span>
                    {t("selectedTicket.openned")} <strong>{ticket.owner.name}</strong>
                </span>
            </div>

            <div className="flex items-center gap-3">
                <Calendar/>
                <span>
                    {formatDate(ticket.opening)}
                </span>
            </div>

            {/* <div className="flex items-center gap-3 text-green-600">
                <CheckCircle2/>
                <span>
                    Conclusão: 14 de jun., 17:46
                </span>
            </div> */}

        </div>
  )
}

export default TicketInfo