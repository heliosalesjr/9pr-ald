"use client";

import { useEffect, useRef, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import TwoColumnLayoutTeacher from "../components/TwoColumnLayoutTeacher";
import Footer from "../components/Footer";

const ProfessoresPage = () => {
  const { isLoaded, userId } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const alertShown = useRef(false);
  const [emailValid, setEmailValid] = useState(null); // null = não checado ainda

  useEffect(() => {
    // Se carregou e NÃO tem usuário (não logado)
    if (isLoaded && !userId && !alertShown.current) {
      alertShown.current = true;
      alert("Você precisa fazer login para acessar esta página!");
      router.push("/");
      return;
    }

    // Se carregou e tem usuário, checa email
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

  // Enquanto não carregou, mostra carregando
  if (!isLoaded) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  // Se não está logado, não mostra nada (pois já foi redirecionado no useEffect)
  if (isLoaded && !userId) {
    return null;
  }

  // Se email inválido, não mostra conteúdo
  if (emailValid === false) {
    return null;
  }

  // Se ainda não validou email (mas tem usuário), mostra carregando
  if (emailValid === null) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  // Se tudo ok, mostra conteúdo
  return (
    <div>
      <TwoColumnLayoutTeacher />
      <Footer />
    </div>
  );
};

export default ProfessoresPage;
