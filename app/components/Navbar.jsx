"use client"
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs"
import Image from "next/image"

const Navbar = () => {
  const { isSignedIn } = useAuth()

  return (
    <nav className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 py-4 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo esquerdo */}
        <a href="/" className="z-10">
          <Image src="/logo-white.png" alt="Logo BEĨ" width={70} height={70} className="mx-8" />
        </a>

        {/* Lado direito com logo SEED e botão/avatar */}
        <div className="flex items-center space-x-4">
          <a href="/" className="z-10">
            <Image src="/seed_h.png" alt="Logo SEED" width={150} height={70} className="mx-8" />
          </a>

          {isSignedIn ? (
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-12 h-12",
                  userButtonAvatarBox: "w-12 h-12",
                  userButtonAvatarImage: "w-12 h-12",
                },
              }}
            />
          ) : (
            <SignInButton mode="modal">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Entrar
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar