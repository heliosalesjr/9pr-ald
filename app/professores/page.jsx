"use client"

import { useEffect, useRef } from "react"
import { useAuth, useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import Footer from "../components/Footer"
import TwoColumnLayoutTeacher from "../components/TwoColumnLayoutTeacher"

const ProfessoresPage = () => {
  const { isLoaded, userId } = useAuth()
  const { user } = useUser()
  const router = useRouter()
  const alertShown = useRef(false)

  useEffect(() => {
    if (!isLoaded) return

    if (!userId && !alertShown.current) {
      alertShown.current = true
      toast.custom((t) => (
        <div className="max-w-md w-full bg-red-600 text-white shadow-lg rounded-lg flex items-center justify-between p-4">
          <span className="text-sm font-medium">Você precisa fazer login para acessar esta página!</span>
          <button onClick={() => toast.dismiss(t.id)} className="ml-4 text-white hover:text-gray-200">✕</button>
        </div>
      ))
      router.push("/")
      return
    }

    if (
      user &&
      !user.primaryEmailAddress?.emailAddress.endsWith("@beieducacaopedagogico.com") &&
      !alertShown.current
    ) {
      alertShown.current = true
      toast.custom((t) => (
        <div className="max-w-md w-full bg-red-600 text-white shadow-lg rounded-lg flex items-center justify-between p-4">
          <span className="text-sm font-medium">Apenas e-mails @beieducacaopedagogico.com têm acesso.</span>
          <button onClick={() => toast.dismiss(t.id)} className="ml-4 text-white hover:text-gray-200">✕</button>
        </div>
      ))
      router.push("/")
    }
  }, [isLoaded, userId, user, router])

  if (!isLoaded || !userId) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>
  }

  return (
    <div>
      <TwoColumnLayoutTeacher />
      <Footer />
    </div>
  )
}

export default ProfessoresPage
