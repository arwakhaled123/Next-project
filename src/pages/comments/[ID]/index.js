import CommentDetails from '@/components/CommentDetails'
import React from 'react'

const index = ({ comment }) => {
  return (
    <div>
      <CommentDetails comment={comment} />
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
  const res = await fetch(`https://dummyjson.com/comments/${params.ID}`);
  const data = await res.json();
  return {
    props: {
      comment: data
    },
    revalidate: 10
  }
}
