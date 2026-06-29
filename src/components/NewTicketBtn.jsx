import { Plus } from "lucide-react";
import { NavLink } from "react-router-dom";

function NewTicketBtn() {
  return (
    <div className="p-4">
      <NavLink
        to={"/ticket/store"}
        className={
          "w-full bg-indigo-600 text-white rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-indigo-700 cursor-pointer"
        }
      >
        <Plus size={18} />
        Novo chamado
      </NavLink>
    </div>
  );
}

export default NewTicketBtn;
