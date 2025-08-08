import { useState } from "react";
import { useRef } from 'react';
import { Post } from '../types/Post';
import { v4 as uuidv4 } from 'uuid';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post.comments);
  const [isEditing, setIsEditing] = useState(false);

  function handleComment(e: React.ChangeEvent<HTMLInputElement>) {
    setComment(e.target.value);
  }

  function handleCommentSubmit() {
    setIsEditing(!isEditing);

    if (isEditing) {
      //코멘트 전송 함수 호출    
      console.log(comment);
      const newComment = {
        id: uuidv4(),
        user: 'guest', // 현재 유저 이름 가져오기
        content: comment,
        createdAt: new Date().toISOString(),
      }
      setComments((prev) => [...prev, newComment]);
      setComment('');
    }
  }



  return (
    <div className="bg-white shadow-md rounded-xl p-5 mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-sm text-gray-700">@{post.user}</span>
        <span className="text-xs text-gray-400">{new Date(post.createdAt).toLocaleString()}</span>
      </div>

      <p className="text-base text-gray-900 whitespace-pre-wrap mb-2">{post.content}</p>

      <button
        className="text-blue-600 text-sm hover:underline"
        onClick={() => setShowComments((prev) => !prev)}
      >
        {showComments ? "댓글 숨기기" : `댓글 ${post.comments.length}개 보기`}
      </button>

      {showComments && (
        <div className="mt-3 space-y-2">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-gray-100 p-2 rounded-md text-sm text-gray-800"
            >
              <div className="flex justify-between mb-1">
                <span className="font-medium">@{comment.user}</span>
                <span className="text-xs text-gray-500">
                  {new Date(comment.createdAt).toLocaleString()}
                </span>
              </div>
              <p>{comment.content}</p>
            </div>
          ))}

          <div className="flex">
            <input
              type="text"
              placeholder="댓글 작성..."
              className="w-full border border-gray-300 p-2 rounded-md text-sm"
              required
              onChange={handleComment}
            />
            <button onClick={handleCommentSubmit}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
}
