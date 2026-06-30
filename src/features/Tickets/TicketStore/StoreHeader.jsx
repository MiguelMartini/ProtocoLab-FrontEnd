import { useTranslation } from "react-i18next";

function StoreHeader() {
  const { t } = useTranslation();
  return (
    <div className="mb-8 flex flex-row justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-900">{t("tickets.newTicketHeader")}</h1>
        <p className="text-xl text-slate-600">
          {t("tickets.newTicketMsg")}
        </p>
      </div>
    </div>
  )
}

export default StoreHeader