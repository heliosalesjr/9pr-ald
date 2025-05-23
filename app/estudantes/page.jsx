"use client"

import { useEffect, useRef } from "react"
import { useAuth } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import Footer from "../components/Footer"
import TwoColumnLayoutStudent from "../components/TwoColummLayoutStudent"

const EstudantesPage = () => {
  const { isLoaded, userId } = useAuth()
  const router = useRouter()
  const alertShown = useRef(false)

  useEffect(() => {
    if (isLoaded && !userId && !alertShown.current) {
      alertShown.current = true
      alert("Você precisa fazer login para acessar esta página!")
      router.push("/")
    }
  }, [isLoaded, userId, router])

  // Se ainda estiver carregando ou não estiver autenticado, não renderiza o conteúdo
  if (!isLoaded || !userId) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>
  }

  return (
    <div>
      <TwoColumnLayoutStudent />
      <Footer />
    </div>
  )
}

export default EstudantesPage

