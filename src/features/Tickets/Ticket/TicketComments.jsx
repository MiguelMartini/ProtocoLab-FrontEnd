import Comment from "./Comment";
import CommentInput from "./CommentInput";

import { comments } from "@/mocks/comments";

function TicketComments() {
  return (
    <div className="rounded-2xl border bg-white shadow-sm">
      <div className="border-b p-5 font-semibold">Comentários ({comments.length})</div>

      <Comment comments={comments}/>

      <CommentInput />
    </div>
  );
}

export default TicketComments;
