import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

function FromFront() {

  const [user, setUser] = useState(null)

  useEffect(() => {

    (async () => {
      const session = await getSession()
      if (session) {
        console.log(session)
        setUser(session.user)
      }
    })()

  }, [])

  return (
    <div>
      {user ? JSON.stringify(user) : 'Loading...'}
    </div>
  )
}

export default FromFront