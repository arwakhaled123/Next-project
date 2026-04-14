import PostsComponent from '@/components/PostsComponent'
import React from 'react'

const index = ({ posts }) => {
  return (
    <PostsComponent posts={posts} />
  )
}

export default index
export const getStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/posts')
  const data = await res.json() 
  return {
    props: {
      posts: data.posts
    }
  }
}