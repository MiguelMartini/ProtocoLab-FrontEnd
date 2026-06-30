import NewTicketBtn from "@/components/NewTicketBtn";
import { useTranslation } from "react-i18next";

function TicketHeader() {
  const { t } = useTranslation();
  return (
    <div className="mb-8 flex flex-row justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-900">{t("tickets.sidebar")}</h1>
        <p className="text-xl text-slate-600">
          {t("tickets.headerMsg")}
        </p>
      </div>
      <div className="w-3xs">
        <NewTicketBtn />
      </div>
    </div>
  );
}

export default TicketHeader;
