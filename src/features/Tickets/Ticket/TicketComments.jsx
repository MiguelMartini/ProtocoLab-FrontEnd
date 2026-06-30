import { useTranslation } from "react-i18next";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

import { comments } from "@/mocks/comments";

function TicketComments() {
  const { t } = useTranslation();
  return (
    <div className="rounded-2xl border bg-white shadow-sm">
      <div className="border-b p-5 font-semibold">{t("selectedTicket.comments")} ({comments.length})</div>

      <Comment comments={comments}/>

      <CommentInput />
    </div>
  );
}

export default TicketComments;
