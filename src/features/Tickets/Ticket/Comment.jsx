function Comment({ comments }) {
  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="p-4">
            <div className="mt-3 flex items-center text-sm text-gray-500">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
                {comment.userName.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col pl-3">
                <h3 className="font-semibold text-gray-900">
                  {comment.userName}
                </h3>
                <p className="text-gray-800">{comment.description}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center p-6">
          <p className="text-gray-500">Nenhum comentário ainda.</p>
        </div>
      )}
    </div>
  );
}

export default Comment;
