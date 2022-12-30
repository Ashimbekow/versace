import React from 'react'

function Post({item}) {
  return (
    <div>
        <h4>USERID: {item.userId}</h4>
        <h4>TITLE: {item.title}</h4>
        <h4>BODY:{item.body}</h4>
    </div>
  )
}

export default Post