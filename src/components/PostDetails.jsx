import React from 'react'

const PostDetails = ({ post }) => {
  return (
    <>
    <h3 className='m-3 p-2'>Post Details:</h3>
      <div className="d-flex flex-wrap gap-3 m-2">  
        {post &&
        <div className="card" style={{ width: "18rem", background: "pink"  }} key={post.id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{ background: "pink"}}>Likes: {post.reactions.likes}</li>
                <li className="list-group-item" style={{ background: "pink"}}>Views: {post.views}</li>
              </ul>
            </div>
        }
      </div>
    </>
  )
}

export default PostDetails