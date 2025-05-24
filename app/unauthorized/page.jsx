"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Unauthorized() {
  const router = useRouter();

  useEffect(() => {
    alert("Apenas e-mails @beieducacaopedagogico.com têm acesso.");
    router.push("/");
  }, [router]);

  return <p>Redirecionando para a página inicial...</p>;
}
