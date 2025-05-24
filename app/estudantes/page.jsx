"use client";

import { useEffect, useRef, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import TwoColumnLayoutStudent from "../components/TwoColummLayoutStudent";

const EstudantesPage = () => {
  const { isLoaded, userId } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const alertShown = useRef(false);
  const [emailValid, setEmailValid] = useState(null); // null = ainda não verificado

  useEffect(() => {
    // Caso não esteja logado
    if (isLoaded && !userId && !alertShown.current) {
      alertShown.current = true;
      alert("Você precisa fazer login para acessar esta página!");
      router.push("/");
      return;
    }

    // Caso esteja logado, validar domínio do email
    if (isLoaded && userId && user) {
      const email = user.emailAddresses?.[0]?.emailAddress || "";
      if (!email.endsWith("@beieducacaopedagogico.com")) {
        if (!alertShown.current) {
          alertShown.current = true;
          alert("Apenas e-mails @beieducacaopedagogico.com têm acesso.");
          router.push("/");
        }
        setEmailValid(false);
      } else {
        setEmailValid(true);
      }
    }
  }, [isLoaded, userId, user, router]);

  // Enquanto o Clerk estiver carregando
  if (!isLoaded) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  // Se não está logado ou email inválido, não renderiza nada (já vai redirecionar)
  if (!userId || emailValid === false) {
    return null;
  }

  // Se ainda não validou o email (mas já está logado)
  if (emailValid === null) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  // Tudo ok, renderiza o conteúdo
  return (
    <div>
      <TwoColumnLayoutStudent />
      <Footer />
    </div>
  );
};

export default EstudantesPage;
