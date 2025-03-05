import React from 'react'

export default async  function blog() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  return (
    <div><h1>blog</h1></div>
  )
  
}
  )
}
