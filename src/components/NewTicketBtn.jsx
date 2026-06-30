import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function NewTicketBtn() {
  const { t } = useTranslation();
  return (
    <div className="p-4">
      <NavLink
        to={"/ticket/store"}
        className={
          "w-full bg-indigo-600 text-white rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-indigo-700 cursor-pointer"
        }
      >
        <Plus size={18} />
        {t("tickets.newTicketBtn")}
      </NavLink>
    </div>
  );
}

export default NewTicketBtn;
