import { useAuth } from "@/hooks/useAuth";
import { LogOut, ShieldCheck } from "lucide-react";

function SidebarUser() {
  const { user } = useAuth();

  return (
     <div className="border-t border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
            U
          </div>

          <div>
            <p className="font-medium">{user?.name}</p>

            <div className="flex items-center gap-1 text-indigo-500 text-sm">
              <ShieldCheck size={14} />
              <span>{user?.role}</span>
            </div>
          </div>
        </div>

        <button className="text-gray-500 hover:text-red-500">
          <LogOut size={18} />
        </button>
      </div>
    </div>
  )
}

export default SidebarUser