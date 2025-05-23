"use client"

import { useEffect, useRef } from "react"
import { useAuth } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import TwoColumnLayoutTeacher from "../components/TwoColumnLayoutTeacher"
import Footer from "../components/Footer"

const ProfessoresPage = () => {
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
      <TwoColumnLayoutTeacher />
      <Footer />
    </div>
  )
}

export default ProfessoresPage


