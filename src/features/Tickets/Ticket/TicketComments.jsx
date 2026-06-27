import CommentInput from "./CommentInput";

function TicketComments() {
  return (
    <div className="rounded-2xl border bg-white shadow-sm">
      <div className="border-b p-5 font-semibold">Comentários (0)</div>

      <div className="p-6 text-gray-500">Nenhum comentário ainda.</div>

      <CommentInput />
    </div>
  );
}

export default TicketComments;
