import React from 'react'

const page = async({params}:{params:{
    videoId:number
}}) => {
    await params.videoId
  return (
    <div>
      video id {JSON.stringify(params.videoId)}
    </div>
  )
}

export default page
