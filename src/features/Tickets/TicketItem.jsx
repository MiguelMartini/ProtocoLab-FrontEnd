import TicketPriority from "./TicketPriority";
import TicketStatus from "./TicketStatus";

function TicketItem({ title, author, createdAt, priority, status, date }) {
  return (
     <div className="flex items-center justify-between p-5 border-b border-slate-200">
      <div>
        <h3 className="font-medium text-lg">
          {title}
        </h3>

        <p className="text-slate-500 text-sm">
          {author} · {createdAt}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <TicketPriority priority={priority} />

        <TicketStatus status={status} />

        <span className="text-slate-500 text-sm text-right w-28">
          {date}
        </span>
      </div>
    </div>
  );
}

export default TicketItem;
