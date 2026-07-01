import { useTranslation } from "react-i18next";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

// import { comments } from "@/mocks/comments";

function TicketComments({comments,ticketId, onCommentAdded}) {
  const { t } = useTranslation();
  return (
     <div className="rounded-2xl border bg-white shadow-sm">
      <div className="border-b p-5 font-semibold">
        {t("selectedTicket.comments")} ({comments.length})
      </div>

      <Comment comments={comments} />

      <CommentInput
        ticketId={ticketId}
        onCommentAdded={onCommentAdded}
      />
    </div>
  );
}

export default TicketComments;
