"use client"
import { useUser, useClerk } from "@clerk/nextjs"
import { useState } from "react"

export default function UserButton() {
  const { user, isSignedIn } = useUser()
  const { signOut } = useClerk()
  const [isOpen, setIsOpen] = useState(false)

  if (!isSignedIn) return null

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white rounded-full p-2 shadow-md"
      >
        <img src={user.imageUrl || "/placeholder.svg"} alt="Avatar" className="h-8 w-8 rounded-full" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <div className="px-4 py-2 text-sm text-gray-700 border-b">
            <p className="font-medium">{user.fullName}</p>
            <p className="text-xs text-gray-500 truncate">{user.primaryEmailAddress?.emailAddress}</p>
          </div>
          <button
            onClick={() => signOut()}
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            Sair
          </button>
        </div>
      )}
    </div>
  )
}
