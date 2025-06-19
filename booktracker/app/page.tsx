// app/page.tsx
'use client'

import { useEffect, useState } from 'react'
import NavbarComponent from '../components/Navbar'
import { Carousel, Theme, Input } from 'react-daisyui'
import { BookOpenText, LogIn, SquarePen, Search, User } from 'lucide-react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [users, setUsers] = useState([])
  const router = useRouter()

  const buttonColor = createTheme({ 
    palette: {
      primary: {
        main: "#fdc57e",
        light: "#fddca7",
        dark: "#b18a57",
        contrastText: "#000000"
      }
    }
  });

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <Theme dataTheme='retro' className="min-h-screen">
      <main className="min-h-screen p-6 pt-16">
        <div className="mb-8 flex items-center gap-2">
          <BookOpenText size={32} />
          <h1 className="text-2xl font-bold">BookMark</h1>
        </div>
    
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Bookmark your books.</h1>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-2xl mb-1">Track your reading.</h1>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-2xl mb-1">Update your friends.</h1>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-2xl mb-1">Discover your next book.</h1>
        </div>
    
        <div>
          {/* <Carousel className="rounded-box w-full h-[500px] carousel-horizontal">
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
          </Carousel> */}
          <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <div className="bg-[#fdc57e] p-6 rounded-box shadow-lg w-full max-w-md">
              <div className="flex justify-center items-center">
                <h1 className="text-3xl font-bold mb-4">Read and Relate</h1>
              </div>
              <div className="flex flex-col gap-4 mb-4 items-center">
                <ThemeProvider theme={buttonColor}>
                  <Button 
                    color="primary" 
                    variant="contained" 
                    sx={{ width: '200px' }} 
                    className="flex items-center gap-2"
                    onClick={() => router.push('./profile')}
                  >
                    <User size={20} />
                    <span>View Profile</span>
                  </Button>
                  <Button color="secondary" variant="contained" sx={{ width: '200px' }} className="flex items-center gap-2">
                    <SquarePen size={20} />
                    <span>Sign Up</span>
                  </Button>
                  <Button color="primary" variant="contained" sx={{ width: '200px' }} className="flex items-center gap-2">
                    <LogIn size={20} />
                    <span>Log In</span>
                  </Button>
                  <Button color="primary" variant="contained" sx={{ width: '200px' }} className="flex items-center gap-2">
                    <Search size={20} />
                    <span>Browse Books</span>
                  </Button>
                </ThemeProvider>
              </div>
              <Input placeholder="Search for books..." className="w-full rounded-box" />
            </div>
          </div>
        </div>
        {/* <ul className="space-y-2">
          {users.map(user => (
            <li key={user.id} className="p-2 border rounded">
              {user.username} – {user.email}
            </li>
          ))}
        </ul> */}
      </main>
    </Theme>
  )
}
