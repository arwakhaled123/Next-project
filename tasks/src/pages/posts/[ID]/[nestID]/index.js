import { useRouter } from 'next/router';
import React from 'react'

const index = () => {
  const router = useRouter();
  const { ID, nestID } = router.query;
  return (
    <div>
      <h3>Dynamic Posts</h3>
      <p className="fs-5">Post ID: {ID}</p>
      <p className="fs-5">Nested ID: {nestID}</p>
    </div>
  )
}

export default index