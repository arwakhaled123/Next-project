import React from 'react'
import CommentsComponent from '../../components/CommentsComponent'

const index = ({ comments }) => {
  return (
    <div>
    <CommentsComponent comments={comments} />
    </div>
  )
}

export default index
export const getStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/comments')
  const data = await res.json()
  return {
    props: {
      comments: data.comments
    },
    revalidate: 10
  }
}