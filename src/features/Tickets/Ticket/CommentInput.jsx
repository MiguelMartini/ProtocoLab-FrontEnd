import { postComment } from "@/api/comments.api";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function CommentInput({ ticketId, onCommentAdded }) {
  const { t } = useTranslation();

  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSend() {
    if (!comment.trim()) return;

    try {
      setLoading(true);

      const newComment = await postComment(ticketId, {
        description: comment,
      });

      setComment("");

      onCommentAdded(newComment);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex gap-3 p-5">
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="flex-1 rounded-xl border px-4 py-3 outline-none"
        placeholder={t("selectedTicket.inputComment")}
      />

      <button
        disabled={loading}
        onClick={handleSend}
        className="rounded-xl bg-indigo-600 hover:bg-indigo-700 p-4 text-white disabled:opacity-50 cursor-pointer"
      >
        <SendHorizontal size={18} />
      </button>
    </div>
  );
}

export default CommentInput;
