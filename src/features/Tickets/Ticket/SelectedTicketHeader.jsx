import TicketStatus from "../TicketStatus";

function SelectedTicketHeader({ title, description, status }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <TicketStatus status={status} />
        </div>
      </div>

      <h1 className="mt-6 text-4xl font-bold">{title}</h1>

      <p className="mt-4 text-gray-600">{description}</p>
    </div>
  );
}

export default SelectedTicketHeader;
