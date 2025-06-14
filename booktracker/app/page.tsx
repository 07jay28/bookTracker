// app/page.tsx
'use client'

import { useEffect, useState } from 'react'
import NavbarComponent from '../components/Navbar'

export default function HomePage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <main className="p-6">
      <NavbarComponent />
  <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to ReadTrack!</h1>
  </div>
      {/* <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-2 border rounded">
            {user.username} – {user.email}
          </li>
        ))}
      </ul> */}
    </main>
  )
}
