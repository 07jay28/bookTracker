// app/page.tsx
'use client'

import { useEffect, useState } from 'react'
import NavbarComponent from '../components/Navbar'
import { Carousel, Theme } from 'react-daisyui'

export default function HomePage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <main className="p-6">
      <div>
        <NavbarComponent />
      </div>
  
      <div>
        <Carousel className="rounded-box w-full h-[500px] carousel-horizontal">
          <Carousel.Item>
            <img 
              src="https://images.unsplash.com/photo-1551300329-dc0a750a7483?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Book" 
              className="w-full h-full object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              src="https://images.unsplash.com/photo-1633477189729-9290b3261d0a?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Book" 
              className="w-full h-full object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              src="https://images.unsplash.com/photo-1662101458732-e1024a703261?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Book" 
              className="w-full h-full object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Book" 
              className="w-full h-full object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              src="https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Book" 
              className="w-full h-full object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              src="https://images.unsplash.com/photo-1686764288887-dae4e7d50d58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Book" 
              className="w-full h-full object-cover"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              src="https://images.unsplash.com/photo-1636262513955-986a7bc5be16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Book" 
              className="w-full h-full object-cover"
            />
          </Carousel.Item>
        </Carousel>

        
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
