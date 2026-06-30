import {
  LayoutGrid,
  Ticket,
  Users,
  Settings,
  Menu,
  X,
  UserPlus,
} from "lucide-react";

import SidebarUser from "./SidebarUser";
import SidebarItem from "./SidebarItem";
import SidebarHeader from "./SidebarHeader";
import { useState } from "react";
import NewTicketBtn from "../NewTicketBtn";
import { useTranslation } from "react-i18next";

function Sidebar() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Botão Mobile */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50"
      >
        <Menu />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
            fixed md:static
            top-0 left-0
            h-screen w-72
            bg-white
            border-r border-slate-200
            z-50
            flex flex-col
            transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
        `}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 md:hidden"
        >
          <X />
        </button>
        <SidebarHeader />

        <NewTicketBtn/>

        <nav className="flex-1 px-4 space-y-2">
          <SidebarItem to="/dashboard" icon={LayoutGrid}>
            Visão geral
          </SidebarItem>

          <SidebarItem to="/tickets" icon={Ticket}>
            Chamados
          </SidebarItem>

          <SidebarItem to="/collaborators" icon={UserPlus}>
            Colaboradores
          </SidebarItem>

          <SidebarItem to="/department" icon={Users}>
            {t("department.sidebar")}
          </SidebarItem>

          <SidebarItem to="/team" icon={Users}>
            {t("team.sidebar")}
          </SidebarItem>

          <SidebarItem to="/settings" icon={Settings}>
            {t("settings.sidebar")}
          </SidebarItem>
        </nav>

        <SidebarUser />
      </aside>
    </div>
  );
}

export default Sidebar;
