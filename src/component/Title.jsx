import React, { useEffect } from 'react'

const Title = () => {


  useEffect(() => {
    setInterval(() => {
      console.log("Title Mounted")
    }, 2000);
  
    return () => {
      console.log("Title unMounted")
    }
  }, [])
  

  return (

    <div className="title">

     <h1>Hello World</h1>

    </div>
  )
}

export default Title