// import { useRouter } from 'next/router';
// import React from 'react'

// const index = () => {
//   const router = useRouter();
//   const { ID } = router.query;
//   return (
//     <div>
//       <h3>Dynamic Posts</h3>
//       <p className="fs-5">Post ID: {ID}</p>

//     </div>
//   )
// }

// export default index

import PostDetails from '@/components/PostDetails'
import React from 'react'

const index = ({ post }) => {
  return (
    <div>
      <PostDetails post={post} />
    </div>
  )
}

export default index
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  }
}
export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const res = await fetch(`https://dummyjson.com/posts/${params.ID}`);
  const data = await res.json();
  return {
    props: {
      post: data
    },
    revalidate: 10
  }
}
