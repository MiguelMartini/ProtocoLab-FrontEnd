import TicketFeature from "./TicketComponent";
import DashBoardCard from "./DashBoardCard";
import { useTranslation } from "react-i18next";

function DashBoardFeature() {
  const { t } = useTranslation();
  
  return (
    <div className="px-20 pt-10 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          {t("dashboard.title")}
        </h1>

        <div className="mt-2">
          <h2 className="text-2xl text-slate-600">
            {t("dashboard.greeting")}{" "}
            <span className="font-bold text-[#4F39F6]">User</span>
          </h2>

          <p className="text-md text-slate-500 mt-1">
            {t("dashboard.subtitle")}
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <DashBoardCard
          title={t("dashboard.cards.tickets.title")}
          total={13}
          description={t("dashboard.cards.tickets.description")}
        />

        <DashBoardCard
          title={t("dashboard.cards.open.title")}
          total={3}
          description={t("dashboard.cards.open.description")}
        />
      </div>

      <TicketFeature />
    </div>
  );
}

export default DashBoardFeature;
