import { Ticket } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Ticket className="bg-indigo-600 text-white w-10 h-10 p-2 rounded-lg" />

      <p className="text-xl font-bold font-[Inter] text-[#4357CB]">
        ProtocoLab
      </p>
    </div>
  );
}

export default Logo;
