import Link from "next/link";
import React from "react";

const CommentsComponent = ({ comments }) => {
  return (
  <>
  <h3 className='m-3 p-2'>Comments</h3>
      <div className="d-flex flex-wrap gap-3 m-2">
      {comments?.map((comment) => {
        return (
          <div className="card bg-info-subtle" style={{ width: "18rem"}} key={comment.id}>
            <div className="card-body">
              <h5 className="card-title">{comment.id}</h5>
              <p className="card-text">{comment.body}</p>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-info-subtle">Likes: {comment.likes}</li>
              <li className="list-group-item bg-info-subtle">User: {comment.user?.fullName}</li>
            </ul>

            <div className="card-body">
              <Link href={`/comments/${comment.id}`} className="btn btn-info">
                See Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default CommentsComponent;