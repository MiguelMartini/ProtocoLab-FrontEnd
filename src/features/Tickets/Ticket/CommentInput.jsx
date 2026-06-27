import { SendHorizontal } from "lucide-react";

function CommentInput() {
  return (
    <div className="flex gap-3 p-5">
      <input
        className="flex-1 rounded-xl border px-4 py-3 outline-none"
        placeholder="Escreva um comentário..."
      />

      <button className="rounded-xl bg-indigo-400 p-4 text-white">
        <SendHorizontal size={18} />
      </button>
    </div>
  );
}

export default CommentInput;
