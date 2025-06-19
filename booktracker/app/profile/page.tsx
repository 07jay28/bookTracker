'use client'

import { useEffect, useState } from 'react'
import NavbarComponent from '../../components/Navbar'
import { Theme, Divider } from 'react-daisyui'
import { BookOpenText, Bookmark, Star, Clock } from 'lucide-react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Avatar, Button } from '@mui/material';
import HorizontalLineComponent from '@/components/HorizontalLine';

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    joinDate: 'January 2024',
    stats: {
      booksRead: 42,
      currentlyReading: 3,
      wantToRead: 15,
      totalReviews: 28
    }
  })

  const buttonColor = createTheme({ 
    palette: {
      primary: {
        main: "#fdc57e",
        light: "#fddca7",
        dark: "#b18a57",
        contrastText: "#000000"
      }
    }
  })

  return (
    <Theme dataTheme='retro' className="min-h-screen">
      <main className="min-h-screen p-6 pt-16">
        <div>
            <NavbarComponent></NavbarComponent>
        </div>
        {/* Profile Header */}
        <div className="flex flex-row items-center mb-8 gap-8 justify-center">
          <div className="flex flex-col items-start min-w-[220px] mr-12">
            <Avatar sx={{ width: 124, height: 124 }} src="https://images.unsplash.com/photo-1601814933824-fd0b574dd592?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <h1 className="text-3xl font-bold mt-4">{user.name}</h1>
            <p className="text-gray-600 mb-4">Member since {user.joinDate}</p>
            <HorizontalLineComponent color="black"></HorizontalLineComponent>
            <div>
                <h1>Friends</h1>
            </div>
            <div>
                <h1>Clubs</h1>
            </div>
            
          </div>
          <div className="flex flex-col items-start gap-4">
            {/* Favorite Quote and Description */}
            <div className="flex flex-col md:flex-row gap-4 w-full mb-2">
              <div className="bg-white p-4 rounded-box shadow-lg flex-1 min-w-[200px]">
                <h2 className="font-semibold text-lg mb-2">Favorite Quote</h2>
                <p className="italic text-gray-700">“So many books, so little time.”</p>
              </div>
              <div className="bg-white p-4 rounded-box shadow-lg flex-1 min-w-[200px]">
                <h2 className="font-semibold text-lg mb-2">Description</h2>
                <p className="text-gray-700">Avid reader and book lover. Always looking for the next great story to dive into!</p>
              </div>
            </div>
            {/* Stats Row */}
            <div className="flex flex-row gap-4 w-full justify-between">
              <div className="bg-white p-4 rounded-box shadow-lg text-center min-w-[120px]">
                <BookOpenText size={24} className="mx-auto mb-2" />
                <h3 className="font-bold text-xl">{user.stats.booksRead}</h3>
                <p className="text-sm text-gray-600">Books Read</p>
              </div>
              <div className="bg-white p-4 rounded-box shadow-lg text-center min-w-[120px]">
                <Bookmark size={24} className="mx-auto mb-2" />
                <h3 className="font-bold text-xl">{user.stats.currentlyReading}</h3>
                <p className="text-sm text-gray-600">Reading Now</p>
              </div>
              <div className="bg-white p-4 rounded-box shadow-lg text-center min-w-[120px]">
                <Star size={24} className="mx-auto mb-2" />
                <h3 className="font-bold text-xl">{user.stats.wantToRead}</h3>
                <p className="text-sm text-gray-600">Want to Read</p>
              </div>
              <div className="bg-white p-4 rounded-box shadow-lg text-center min-w-[120px]">
                <Clock size={24} className="mx-auto mb-2" />
                <h3 className="font-bold text-xl">{user.stats.totalReviews}</h3>
                <p className="text-sm text-gray-600">Reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
            {/* Book Lists Section */}
            <div className="flex flex-col gap-6">
            {/* Favorites Section */}
            <div className="bg-white p-6 rounded-box shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Favorites</h2>
                <div className="space-y-4">
                {/* Sample favorite items - replace with actual data */}
                <div className="flex items-center gap-4">
                    <div className="w-16 h-24 bg-gray-200 rounded"></div>
                    <div>
                    <h3 className="font-semibold">Favorite Book 1</h3>
                    <p className="text-sm text-gray-600">Author Name</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-16 h-24 bg-gray-200 rounded"></div>
                    <div>
                    <h3 className="font-semibold">Favorite Book 2</h3>
                    <p className="text-sm text-gray-600">Author Name</p>
                    </div>
                </div>
                </div>
            </div>

            {/* Currently Reading */}
            <div className="bg-white p-6 rounded-box shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Currently Reading</h2>
                <div className="space-y-4">
                {/* Sample book items - replace with actual data */}
                <div className="flex items-center gap-4">
                    <div className="w-16 h-24 bg-gray-200 rounded"></div>
                    <div>
                    <h3 className="font-semibold">Book Title 1</h3>
                    <p className="text-sm text-gray-600">Author Name</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-[#fdc57e] h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Want to Read */}
            <div className="bg-white p-6 rounded-box shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Want to Read</h2>
                <div className="space-y-4">
                {/* Sample book items - replace with actual data */}
                <div className="flex items-center gap-4">
                    <div className="w-16 h-24 bg-gray-200 rounded"></div>
                    <div>
                    <h3 className="font-semibold">Book Title 2</h3>
                    <p className="text-sm text-gray-600">Author Name</p>
                    <ThemeProvider theme={buttonColor}>
                        <Button 
                        color="primary" 
                        variant="contained" 
                        size="small"
                        className="mt-2"
                        >
                        Start Reading
                        </Button>
                    </ThemeProvider>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      </main>
    </Theme>
  )
} 