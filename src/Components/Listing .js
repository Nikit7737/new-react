import React, { useEffect, useState } from "react"

const AsyncAwait = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://testing.timestint.com/tsapi/v1/blog/post/ ")
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    {/* <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    Time Management: { item.TimeManagement }, 
                    Remote work: { item.Remotework }, 
                    User_Email: { item.email } 
                    </ol>
                ))
            }
        </div>
     */}
    </>
  )
}

export default AsyncAwait
