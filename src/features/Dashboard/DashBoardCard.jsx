import { Ticket } from "lucide-react";

function DashBoardCard({ title, icon, description, total }) {
  return (
    <div
      className="
      w-65
      h-30
      bg-white
      border border-slate-200
      rounded-2xl
      shadow-sm
      p-6
      flex flex-col justify-center
      hover:bg-gray-100
    "
    >
      <div className="flex justify-between">
        <h2 className="text-lg font-medium">{title}</h2>
        <span>
          <Ticket />
        </span>
      </div>

      <p className="text-3xl font-bold mt-2">{total}</p>

      <p className="text-md text-slate-500">{description}</p>
    </div>
  );
}

export default DashBoardCard;
